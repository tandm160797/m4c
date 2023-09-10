import { Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';

import useAuth, { useAuthStore } from '@biso24/hooks/useAuth';
import { authService } from '@services';
import { toast } from 'react-toastify';
import { routePath } from 'routes';

const LoginPage = () => {
	console.log(1);
	const { login } = useAuth({ authService });
	const { user } = useAuthStore();

	console.log(user);

	const handleFinish = async (formValues: any) => {
		try {
			await login.mutateAsync(formValues);
			toast.success('Đăng nhập thành công!');
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return user ? (
		<Navigate to={routePath.home} />
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
