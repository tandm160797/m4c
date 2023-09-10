export enum Modules {
	Bizcore = 'core',
	HCM = 'hcm',
	Accountant = 'accountant',
}

export interface RoutePath {
	all: '*';
	home: '/';
	notFound: '/404';

	// Auth Routes
	login: '/login';
	resetPassword: '/reset-password';
	forgotPassword: '/forgot-password';
	changePassword: '/change-password';
	changePasswordVerified: '/change-password-verified';
	verifiedAccount: '/accounts/verify-account/:userId/:token';

	[key: string]: string;
}

export const moduleRoutePath: RoutePath = {
	all: '*',
	home: '/',
	notFound: '/404',

	// Auth Routes
	login: '/login',
	resetPassword: '/reset-password',
	forgotPassword: '/forgot-password',
	changePassword: '/change-password',
	changePasswordVerified: '/change-password-verified',
	verifiedAccount: '/accounts/verify-account/:userId/:token',
};
