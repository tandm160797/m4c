import { useRoutes } from 'react-router-dom';

import { getRoutesByPermission } from 'routes';

const App = () => {
	const routing = useRoutes(getRoutesByPermission('*'));
	return routing;
};

export default App;
