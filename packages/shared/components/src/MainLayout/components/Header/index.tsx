import { Layout } from 'antd';

import { useMainLayoutStore } from '../../hooks';
import useStyles from './styles';

export const Header = () => {
	const { styles } = useStyles();

	const { headerRef } = useMainLayoutStore();

	return (
		<Layout.Header className={styles.header} ref={headerRef}>
			Header
		</Layout.Header>
	);
};
