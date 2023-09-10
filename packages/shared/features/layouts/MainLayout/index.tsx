import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { moduleRoutePath } from '@biso24/constants/modules';
import { useAuthStore } from '@biso24/hooks/useAuth';
import Header from './components/Header';
import MainLayoutSkeleton from './components/MainLayoutSkeleton';
import Sider from './components/Sider';
import useStyles from './styles';

export * from './constants';
export * from './hooks';

const MainLayout = () => {
	const navigate = useNavigate();

	const { user } = useAuthStore();

	const { styles } = useStyles();

	useEffect(() => {
		if (!user) {
			navigate(moduleRoutePath.login);
		}
	}, [user]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return loading ? (
		<MainLayoutSkeleton />
	) : (
		<Layout className={styles.mainLayout}>
			<Header />
			<Sider />
		</Layout>
	);
};

export default MainLayout;
