import { Layout, Skeleton } from 'antd';

import { mainLayout } from '@biso24/theme';
import useStyles from './styles';

export const MainLayoutSkeleton = () => {
	const { styles } = useStyles();

	return (
		<Layout className={styles.mainLayoutSkeleton}>
			<Layout.Header className={styles.header}>
				<Skeleton.Button active />
			</Layout.Header>

			<Layout className={styles.sider} hasSider>
				<Layout.Sider className={styles.siderLv1} collapsed collapsedWidth={mainLayout.siderLv1CollapsedWidth}>
					<Skeleton.Button active />
				</Layout.Sider>

				<Layout.Sider className={styles.siderLv2} collapsed={false} collapsedWidth={mainLayout.siderLv2CollapsedWidth}>
					<Skeleton.Button active />
				</Layout.Sider>

				<Layout.Content className={styles.content}>
					<div className="mainContent">
						<Skeleton.Button active />
					</div>
				</Layout.Content>
			</Layout>
		</Layout>
	);
};
