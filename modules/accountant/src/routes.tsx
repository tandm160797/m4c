import { MainLayout } from '@biso24/components';

const adminRoutes: any[] = [];

const publicRoutes: any[] = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <div>Content</div>
			}
		]
	},

	{
		path: '/login',
		element: <h1>Login page</h1>
	}
];

const routes = (role?: string) => {
	switch (role) {
		case 'Admin':
			return [...adminRoutes, ...publicRoutes];

		default:
			return publicRoutes;
	}
};

export default routes;
