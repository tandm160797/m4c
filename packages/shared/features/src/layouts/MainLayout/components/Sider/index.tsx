import { Layout, Menu } from 'antd';
import { type MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useState, type Key, type ReactNode } from 'react';

import { Icon, Image } from '@biso24/components';
import { type Modules } from '@biso24/constants';
import { useMainLayoutStore } from '@biso24/features';
import { mainLayout } from '@biso24/theme';
import { getModuleName } from '@biso24/utils';
import { Content } from '../Content';
import useStyles from './styles';

export interface MenuItem extends MenuItemType {
	key: Key;
	label?: ReactNode;
	icon?: ReactNode;
	children?: MenuItem[];
	theme?: 'light' | 'dark';
	[key: string]: any;
}

const getItem = ({ label, key, icon, children, theme, ...restProps }: MenuItem) =>
	({
		key,
		icon,
		children,
		label,
		theme,
		...restProps,
	}) as unknown as MenuItem;

const items = [
	getItem({
		key: 'divider',
		type: 'divider',
	}),
	getItem({
		key: 'bizCore',
		icon: <Icon icon="bizcore" size={24} />,
		label: 'BizCore',
		title: '',
	}),
	getItem({
		key: 'hcm',
		icon: <Icon icon="hcm" size={24} />,
		label: 'HCM',
		title: '',
	}),
	getItem({
		key: 'accountant',
		icon: <Icon icon="sales" size={24} />,
		label: 'Accountant',
		title: '',
	}),
];

export const Sider = () => {
	const { styles } = useStyles();

	const { siderLv1Ref, siderLv2Ref } = useMainLayoutStore();

	const [isSiderLv1Collapsed, setIsSiderLv1Collapsed] = useState<boolean>(true);
	const handleSiderLv1CollapsedToggle = () => {
		setIsSiderLv1Collapsed(!isSiderLv1Collapsed);
	};

	const [siderLv1ActiveKey, setSiderLv1ActiveKey] = useState<Modules>(getModuleName);
	const handleSiderLv1ActiveChange = ({ key }: any) => {
		setSiderLv1ActiveKey(key);
	};

	const [isSiderLv2Collapsed, setIsSiderLv2Collapsed] = useState<boolean>(false);
	const handleSiderLv2CollapsedToggle = () => {
		setIsSiderLv2Collapsed(!isSiderLv2Collapsed);
	};

	return (
		<Layout className={styles.sider} hasSider>
			<Layout.Sider
				className={styles.siderLv1}
				ref={siderLv1Ref}
				collapsed={isSiderLv1Collapsed}
				collapsedWidth={mainLayout.siderLv1CollapsedWidth}
			>
				<div className="top">
					{isSiderLv1Collapsed ? (
						<Icon className="collapsedIcon" icon="app" size={24} onClick={handleSiderLv1CollapsedToggle} />
					) : (
						<>
							<div className="title">CHỌN MODULE</div>
							<Icon className="expandedIcon" icon="sider-expanded" size={28} onClick={handleSiderLv1CollapsedToggle} />
						</>
					)}
				</div>
				<div className="center">
					<Menu className="modules" items={items} activeKey={siderLv1ActiveKey} onClick={handleSiderLv1ActiveChange} />
				</div>
				<div className="bottom">
					{isSiderLv1Collapsed ? <Image image="biso24LogoMini" /> : <Image image="biso24LogoFull" />}
				</div>
			</Layout.Sider>

			<Layout.Sider
				className={styles.siderLv2}
				ref={siderLv2Ref}
				collapsed={isSiderLv2Collapsed}
				collapsedWidth={mainLayout.siderLv2CollapsedWidth}
			>
				{isSiderLv2Collapsed ? (
					<Icon className="ecIcon" icon="sider-collapsed" size={20} onClick={handleSiderLv2CollapsedToggle} />
				) : (
					<Icon className="ecIcon" icon="sider-expanded" size={20} onClick={handleSiderLv2CollapsedToggle} />
				)}
			</Layout.Sider>

			<Content />
		</Layout>
	);
};
