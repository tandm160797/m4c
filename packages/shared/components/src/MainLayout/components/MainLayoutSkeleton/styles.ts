import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
	mainLayoutSkeleton: {
		minWidth: '100vw',
		maxWidth: '100vw',
		minHeight: '100vh',
		maxHeight: '100vh'
	},

	header: {
		padding: 0,
		top: 0,
		zIndex: 2,
		position: 'fixed',

		minWidth: '100vw',
		maxWidth: '100vw',
		minHeight: token.cssVars.mainLayout.headerHeight,
		maxHeight: token.cssVars.mainLayout.headerHeight,
		overflow: 'hidden',

		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'transparent',

		'& .ant-skeleton': {
			display: 'block',
			width: '100%',
			height: '100%',

			'& .ant-skeleton-button': {
				display: 'block',
				width: '100%',
				height: '100%',
				borderRadius: 0
			}
		}
	},

	sider: {
		paddingTop: token.cssVars.mainLayout.headerHeight
	},

	siderLv1: {
		minHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		maxHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		backgroundColor: `${token.cssVars.mainLayout.siderLv1BgColor} !important`,

		'& .ant-skeleton': {
			display: 'block',
			width: '100%',
			height: '100%',

			'& .ant-skeleton-button': {
				display: 'block',
				width: '100%',
				height: '100%',
				borderRadius: 0
			}
		}
	},

	siderLv2: {
		minHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		maxHeight: `calc(100vh - ${token.cssVars.mainLayout.headerHeight})`,
		backgroundColor: `${token.cssVars.mainLayout.siderLv2BgColor} !important`,

		'& .ant-skeleton': {
			display: 'block',
			width: '100%',
			height: '100%',

			'& .ant-skeleton-button': {
				display: 'block',
				width: '100%',
				height: '100%',
				borderRadius: 0
			}
		}
	},

	content: {
		paddingTop: token.cssVars.mainLayout.contentPaddingTop,
		paddingLeft: token.cssVars.mainLayout.contentPaddingLeft,
		backgroundColor: `${token.cssVars.mainLayout.contentBgColor} !important`,

		'& .mainContent': {
			height: '100%',
			backgroundColor: token.cssVars.color.white,

			'& .ant-skeleton': {
				display: 'block',
				width: '100%',
				height: '100%',

				'& .ant-skeleton-button': {
					display: 'block',
					width: '100%',
					height: '100%',
					borderRadius: 0
				}
			}
		}
	}
}));

export default useStyles;
