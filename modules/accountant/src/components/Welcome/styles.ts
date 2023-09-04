import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, responsive }) => ({
	testREM: {},

	testCSS: {
		background: token.colorPrimary,
		color: token.cssVars.color.yellow
	},

	div: {
		responsive: responsive.xxl
	}
}));

export default useStyles;
