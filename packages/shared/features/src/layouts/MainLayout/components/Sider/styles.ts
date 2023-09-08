import { createStyles } from 'antd-style';
import { rgba } from 'polished';

const useStyles = createStyles(({ token }) => ({
	sider: {
		paddingTop: token.cssVars.mainLayout.headerHeight,
	},

	siderLv1: {
		minHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		maxHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		backgroundColor: `${token.cssVars.mainLayout.siderLv1BgColor} !important`,

		'& > .ant-layout-sider-children': {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',

			'& .top': {
				minHeight: 72,
				maxHeight: 72,
				padding: '20px 0px',
				paddingLeft: 16,
				position: 'relative',
				display: 'flex',
				alignItems: 'center',

				'& .title': {
					fontSize: '1.8rem',
					fontWeight: token.cssVars.fontWeight.bold,
				},

				'& .expandedIcon': {
					top: 'calc(50% - 12px)',
					right: 0,

					position: 'absolute',
				},
			},

			'& .center': {
				flex: 1,

				'& .modules': {
					borderRight: 'none',

					'& li:first-child': {
						backgroundColor: '#f0f0f0',
					},

					'& li': {
						width: '100%',
						margin: `0 !important`,
						borderRadius: 0,
						backgroundColor: `${token.cssVars.mainLayout.siderLv1BgColor}`,
						display: 'flex',
						alignItems: 'center',

						'&:hover': {
							backgroundColor: `${rgba(token.colorPrimary, 0.1)}`,
						},
					},

					'& li[class~="ant-menu-item-selected"]': {
						color: token.colorText,
					},

					'& li[class~="ant-menu-item-active"]': {
						backgroundColor: token.colorPrimary,
						color: token.cssVars.color.white,
					},
				},

				'& .modules.ant-menu-inline-collapsed': {
					'& .ant-menu-title-content': {
						display: 'none',
					},
				},
			},

			'& .bottom': {
				minHeight: 85,
				maxHeight: 85,
				padding: '20px 16px',
				display: 'flex',
				alignItems: 'center',
			},
		},
	},

	siderLv2: {
		minHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		maxHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		backgroundColor: `${token.cssVars.mainLayout.siderLv2BgColor} !important`,

		'& .ecIcon': {
			top: '50%',
			right: -10,
			position: 'absolute',
		},
	},
}));

export default useStyles;
