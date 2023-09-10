import { Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { moduleRoutePath } from '@biso24/constants/modules';
import useAuth, { useAuthStore } from '@biso24/hooks/useAuth';

import { useAuthFeatureService } from './hooks';

const LoginPage = () => {
	const { authService } = useAuthFeatureService();

	const { login } = useAuth({ authService: authService! });

	const { user } = useAuthStore();

	const handleFinish = async (formValues: any) => {
		try {
			await login.mutateAsync(formValues);
			toast.success('Đăng nhập thành công!');
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return user ? (
		<Navigate to={moduleRoutePath.home} />
	) : (
		<div>
			<h3>login</h3>

			<Form onFinish={handleFinish}>
				<Form.Item name="email">
					<Input />
				</Form.Item>
				<Form.Item name="password">
					<Input />
				</Form.Item>
				<Button htmlType="submit">Login</Button>
			</Form>
		</div>
	);
};

export default LoginPage;
