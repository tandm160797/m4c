import { Layout } from 'antd';

import { useMainLayout } from '@biso24/features/layouts/MainLayout';
import { useAuthStore } from '@biso24/hooks/useAuth';
import useStyles from './styles';

const Header = () => {
	const { styles } = useStyles();

	const { headerRef } = useMainLayout();

	const { handleLogout } = useAuthStore();

	return (
		<Layout.Header className={styles.header} ref={headerRef}>
			<h3>Header</h3>

			<div className="userPopover" onClick={handleLogout}>
				Logout
			</div>
		</Layout.Header>
	);
};

export default Header;
