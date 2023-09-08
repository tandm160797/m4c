import { type RouteObject } from 'react-router-dom';

import { moduleRoutePath } from '@biso24/constants';
import { MainLayout } from '@biso24/features';
import Welcome from '@components/Welcome';

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
		element: <h1>Login page</h1>,
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
