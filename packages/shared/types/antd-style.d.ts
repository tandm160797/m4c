import 'antd-style';

import { type CSSVars, type scrollbar } from '@biso24/theme';

declare module 'antd-style' {
	export interface CustomToken {
		cssVars: CSSVars;
		scrollbar: typeof scrollbar;
	}
}
