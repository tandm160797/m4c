import { useEffect, type ReactNode } from 'react';

import { type AuthService } from '@biso24/services/authService';
import { useAuthFeatureService } from './hooks';

export { default as LoginPage } from './LoginPage';

export interface AuthFeatureProps {
	authService: AuthService;
	children: ReactNode;
}

const AuthFeature = ({ children, ...restProps }: AuthFeatureProps) => {
	const services = useAuthFeatureService();

	useEffect(() => {
		if (!Object.values(services).some(Boolean)) {
			useAuthFeatureService.setState(restProps);
		}
	}, [restProps]);

	return Object.values(services).every(Boolean) ? children : null;
};

export default AuthFeature;
