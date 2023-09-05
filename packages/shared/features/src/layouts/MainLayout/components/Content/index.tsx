import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { useMainLayoutStore } from '@biso24/features';
import useStyles from './styles';

export const Content = () => {
	const { styles } = useStyles();

	const { contentRef } = useMainLayoutStore();

	return (
		<Layout.Content className={styles.content} ref={contentRef}>
			<div className="mainContent">
				<Outlet />
			</div>
		</Layout.Content>
	);
};
