import { useMutation } from '@tanstack/react-query';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type AuthService } from '@biso24/services/authService';
import { type Token } from '@biso24/types/models/Auth';

export interface AuthState {
	user: any;
	token: Token;
	permissionList: any[] | null;

	handleLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			token: {
				accessKey: null,
				refreshToken: null,
			},
			permissionList: [],

			handleLogout: () => {
				set({
					user: null,
					token: {
						accessKey: null,
						refreshToken: null,
					},
					permissionList: null,
				});
			},
		}),
		{
			name: 'Biso24/Auth',
		},
	),
);

export interface UseAuthProps {
	authService: AuthService;
}

const useAuth = ({ authService }: UseAuthProps) => {
	const login = useMutation({
		mutationFn: async (data) => {
			const { token, ...user } = await authService.login(data);
			const permissionList = user?.tenantRoleId?.permissions?.reduce(
				(previous: any, current: any) => ({ ...previous, [current.key]: current.actions }),
				{},
			);
			useAuthStore.setState({ user, token, permissionList });
		},
	});

	// handleChangePassword: async (authService, data) => {
	// 	const userInfo = await authService.changePassword(data);
	// 	const { token, ...user } = await authService.login({ email: userInfo.email, password: data.password });
	// 	set({ user, token });
	// 	return { token, user };
	// };

	// handleResetPassword: async (authService, data) => {
	// 	const userInfo = await authService.resetPassword(data);
	// 	const { token, ...user } = await authService.login({ email: userInfo.email, password: data.password });
	// 	set({ user, token });
	// 	return { token, user };
	// };

	// handleChangePasswordVerified: async (authService, data) => {
	// 	const userInfo = await authService.changePasswordVerified(data);
	// 	const { token, ...user } = await authService.login({ email: userInfo.email, password: data.password });
	// 	set({ user, token });
	// 	return { token, user };
	// };

	// handleForgotPassword: async (authService, data) => {
	// 	await authService.forgotPassword(data);
	// 	return data;
	// };

	// handleVerifiedAccount: async (authService, data) => {
	// 	await authService.verifiedAccount(data);
	// 	return data;
	// };

	// handleLogout: () => {
	// 	set({ user: null, token: null, permissionList: null });
	// };

	return {
		login,
	};
};

export default useAuth;
