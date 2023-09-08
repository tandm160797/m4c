import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, responsive }) => ({
	testREM: {
		fontSize: '3rem',
	},

	testCSS: {
		background: token.colorPrimary,
		color: token.cssVars.color.white,
	},

	div: {
		responsive: responsive.xxl,
	},
}));

export default useStyles;
