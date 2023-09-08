import { type ThemeConfig } from 'antd';
import { type CustomToken } from 'antd-style';

export interface Color {
	white: string;
}

export interface FontWeight {
	thin: number;
	extraLight: number;
	light: number;
	regular: number;
	medium: number;
	semiBold: number;
	bold: number;
	extraBold: number;
	black: number;
}

export interface MainLayout {
	headerHeight: number;

	siderLv1BgColor: string;
	siderLv1ExpandedWidth: number;
	siderLv1CollapsedWidth: number;

	siderLv2BgColor: string;
	siderLv2ExpandedWidth: number;
	siderLv2CollapsedWidth: number;

	contentPaddingTop: number;
	contentPaddingLeft: number;
	contentBgColor: string;
}

export interface CSSVars {
	color: Record<keyof Color, string>;
	fontWeight: Record<keyof FontWeight, number>;
	mainLayout: Record<keyof MainLayout, string | number>;
}

export const mainLayout: MainLayout = {
	headerHeight: 40,

	siderLv1BgColor: '#d8dadc',
	siderLv1CollapsedWidth: 56,
	siderLv1ExpandedWidth: 214,

	siderLv2BgColor: '#f3f4f6',
	siderLv2CollapsedWidth: 0,
	siderLv2ExpandedWidth: 260,

	contentPaddingTop: 10,
	contentPaddingLeft: 10,
	contentBgColor: '#e5e5e5',
};

export const cssVars: CSSVars = {
	// Commons
	color: {
		white: '#fff',
	},
	fontWeight: {
		thin: 100,
		extraLight: 200,
		light: 300,
		regular: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
		black: 900,
	},

	// MainLayout
	mainLayout,
};

export const scrollbar = {
	scrollbarWidth: '10px',
	scrollbarHeight: '10px',
	scrollbarBorderThickness: '0px',
	scrollbarBorderRadius: '6px',
	scrollbarButtonColor: '#3f3f46',
	scrollbarButtonHoverColor: '#84c6de',
	scrollbarThumbColor: '#c2c2c2',
	scrollbarThumbHoverColor: '#84c6de',
	scrollbarTrackColor: '#e8e8e8',
	scrollbarCornerColor: '#e8e8e8',
};

export const theme: ThemeConfig = {
	token: {
		colorPrimary: '#32a1c8',
	},
};

export const customToken: CustomToken = {
	cssVars,
	scrollbar,
};
