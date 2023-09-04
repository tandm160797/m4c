import { type Modules } from '@biso24/constants';

export const getModuleName = () => window.location.pathname.split('/')[1] as Modules;
