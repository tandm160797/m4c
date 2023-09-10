import { createRef, type Ref } from 'react';
import { create } from 'zustand';

export interface MainLayoutState {
	headerRef: Ref<HTMLElement>;
	siderLv1Ref: Ref<HTMLDivElement>;
	siderLv2Ref: Ref<HTMLDivElement>;
	contentRef: Ref<HTMLDivElement>;
}

export const useMainLayout = create<MainLayoutState>(() => ({
	headerRef: createRef(),
	siderLv1Ref: createRef(),
	siderLv2Ref: createRef(),
	contentRef: createRef(),
}));
