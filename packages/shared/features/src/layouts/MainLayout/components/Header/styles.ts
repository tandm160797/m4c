import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
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
		backgroundColor: token.colorPrimary,
	},
}));

export default useStyles;
