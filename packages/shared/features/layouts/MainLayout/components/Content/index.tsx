import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { useMainLayout } from '@biso24/features/layouts/MainLayout';
import useStyles from './styles';

const Content = () => {
	const { styles } = useStyles();

	const { contentRef } = useMainLayout();

	return (
		<Layout.Content className={styles.content} ref={contentRef}>
			<div className="mainContent">
				<Outlet />
			</div>
		</Layout.Content>
	);
};

export default Content;
