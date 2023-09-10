import { type Axios } from 'axios';

export interface QueryKeys {
	all: ['auth'];
	detail: (id: Id) => string[];
	getUsersAsignedRole: () => string[];
	getUsersDoNotAssignRole: () => string[];
	getRoles: () => string[];
	getUsers: () => string[];
	getActionLists: () => string[];
}

export interface AuthService {
	queryKeys: QueryKeys;
	login: (data: any) => Promise<any>;
	verifyToken: (accessToken: string) => Promise<any>;
	resetPassword: (data: any) => Promise<any>;
	changePassword: (data: any) => Promise<any>;
	forgotPassword: (data: any) => Promise<any>;
	changePasswordVerified: (data: any) => Promise<any>;
	verifiedAccount: ({ userId, token }: any) => Promise<any>;
	getUsersAsignedRole: () => Promise<any>;
	getUsersDoNotAssignRole: () => Promise<any>;
	getRoles: () => Promise<any>;
	assignRoleToUsers: (data: any) => Promise<any>;
	getUsers: () => Promise<any>;
	create: (data: any) => Promise<any>;
	update: (id: Id, data: any) => Promise<any>;
	getActionLists: () => Promise<any>;
	addRole: (data: any) => Promise<any>;
	updateRole: (id: Id, data: any) => Promise<any>;
}

export const createAuthService = (axiosClient: Axios): AuthService => {
	const queryKeys: QueryKeys = {
		all: ['auth'],
		detail: (id: Id) => [...queryKeys.all, 'detail', id],
		getUsersAsignedRole: () => [...queryKeys.all, 'getUsersAsignedRole'],
		getUsersDoNotAssignRole: () => [...queryKeys.all, 'getUsersDoNotAssignRole'],
		getRoles: () => [...queryKeys.all, 'getRoles'],
		getUsers: () => [...queryKeys.all, 'getUsers'],
		getActionLists: () => [...queryKeys.all, 'getActionLists'],
	};

	return {
		queryKeys,
		login: async (data: any) => await axiosClient.post('/auth/login', data),
		verifyToken: async (accessToken: string) => await axiosClient.post('/auth/verify-token', { token: accessToken }),
		resetPassword: async (data: any) => await axiosClient.post('/users/reset-password', data),
		changePassword: async (data: any) => await axiosClient.post('/users/change-password', data),
		forgotPassword: async (data: any) => await axiosClient.post('/accounts/forgot-password', data),
		changePasswordVerified: async (data: any) => await axiosClient.post('/accounts/passwords', data),
		verifiedAccount: async ({ userId, token }: any) =>
			await axiosClient.get(`/accounts/verify-account/${userId}/${token}`),
		getUsersAsignedRole: async () => await axiosClient.get(`/users?existsTenantRoleId=true`),
		getUsersDoNotAssignRole: async () => await axiosClient.get(`/users?existsTenantRoleId=false`),
		getRoles: async () => await axiosClient.get(`/tenant-roles`),
		assignRoleToUsers: async (data: any) => await axiosClient.post('/users/assign-role-to-users', data),
		getUsers: async () => await axiosClient.get(`/users`),
		create: async (data: any) => await axiosClient.post(`/users`, data),
		update: async (id: Id, data: any) => await axiosClient.put(`/users/${id}`, data),
		getActionLists: async () => await axiosClient.get('/application-actions'),
		addRole: async (data: any) => await axiosClient.post(`/tenant-roles`, data),
		updateRole: async (id: Id, data: any) => await axiosClient.put(`/tenant-roles/${id}`, data),
	};
};
