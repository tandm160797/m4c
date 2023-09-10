import { createAuthService } from '@biso24/services/authService';
import { createAxiosClient } from '@biso24/services/axiosClient';

const axiosOptions = {
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
};
export const axiosClient = createAxiosClient(axiosOptions);

export const authService = createAuthService(axiosClient);
