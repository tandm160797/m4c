import axios, { type CreateAxiosDefaults } from 'axios';

import { useAuthStore } from '@biso24/hooks/useAuth';
import { type Token } from '@biso24/types/models/Auth';

let refresh = false;

const refreshTokenRequest = async (options: CreateAxiosDefaults) => {
	const axiosClient = axios.create(options);
	try {
		const { token } = useAuthStore.getState();
		if (!token?.refreshToken) {
			useAuthStore.setState({
				user: null,
				token: {
					accessKey: null,
					refreshToken: null,
				},
				permissionList: null,
			});
			return;
		}

		const { data } = await axiosClient.post(
			'/auth/refresh-token',
			{
				refreshToken: token.refreshToken,
			},
			{
				withCredentials: true,
				headers: {
					domain: import.meta.env.VITE_DOMAIN_URL || window.location.hostname,
				},
			},
		);

		useAuthStore.setState({
			token: {
				accessKey: data.data.accessKey,
				refreshToken: data.data.refreshToken,
			},
		});
		return data.data as Token;
	} catch {
		useAuthStore.setState({
			user: null,
			token: {
				accessKey: null,
				refreshToken: null,
			},
			permissionList: null,
		});
	}
};

export const createAxiosClient = (options: CreateAxiosDefaults) => {
	const axiosClient = axios.create(options);

	axiosClient.interceptors.request.use(
		(request) => {
			const { token } = useAuthStore.getState();

			if (!request.headers.Authorization && token) {
				request.headers.Authorization = `Bearer ${token.accessKey}`;
			}
			request.headers.domain = import.meta.env.VITE_DOMAIN_URL || window.location.hostname;
			return request;
		},
		async (error) => await Promise.reject(error),
	);

	axiosClient.interceptors.response.use(
		(response) => response.data.data,
		async (error) => {
			if (error.response.data.message === 'jwt expired' && !refresh) {
				refresh = true;
				const token = await refreshTokenRequest(options);
				const request = error.config;
				request.headers.Authorization = `Bearer ${token!.accessKey}`;
				return await axiosClient(request);
			}

			if (error.response.data.message === 'jwt malformed') {
				useAuthStore.setState({
					user: null,
					token: {
						accessKey: null,
						refreshToken: null,
					},
					permissionList: null,
				});
				return;
			}

			refresh = false;
			return await Promise.reject(error.response?.data || error);
		},
	);

	return axiosClient;
};
