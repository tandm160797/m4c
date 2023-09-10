import { type RouteObject } from 'react-router-dom';

import { moduleRoutePath } from '@biso24/constants/modules';
import AuthFeature, { LoginPage } from '@biso24/features/Auth';
import MainLayout from '@biso24/features/layouts/MainLayout';

import Welcome from '@components/Welcome';
import { authService } from '@services';

export const routePath = {
	...moduleRoutePath,
};

const permissionRoutes: RouteObject[] = [
	{
		path: routePath.home,
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Welcome />,
			},
		],
	},
];

const publicRoutes: RouteObject[] = [
	{
		path: routePath.login,
		element: (
			<AuthFeature authService={authService}>
				<LoginPage />
			</AuthFeature>
		),
	},
];

export const getRoutesByPermission = (permission: string): RouteObject[] => {
	switch (permission) {
		case '*': {
			return [...permissionRoutes, ...publicRoutes];
		}

		default: {
			return publicRoutes;
		}
	}
};
