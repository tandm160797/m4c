import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
	content: {
		paddingTop: token.cssVars.mainLayout.contentPaddingTop,
		paddingLeft: token.cssVars.mainLayout.contentPaddingLeft,
		backgroundColor: `${token.cssVars.mainLayout.contentBgColor} !important`,

		'& .mainContent': {
			height: '100%',
			backgroundColor: token.cssVars.color.white
		}
	}
}));

export default useStyles;
