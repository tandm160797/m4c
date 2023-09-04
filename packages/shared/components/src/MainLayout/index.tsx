import { Layout } from 'antd';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { MainLayoutSkeleton } from './components/MainLayoutSkeleton';
import { Sider } from './components/Sider';
import useStyles from './styles';

export const MainLayout = (): JSX.Element => {
	const navigate = useNavigate();

	const [user] = useState(true);

	const { styles } = useStyles();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user]);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
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
