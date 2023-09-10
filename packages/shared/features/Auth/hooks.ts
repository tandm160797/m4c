import { create } from 'zustand';

import { type AuthService } from '@biso24/services/authService';

export interface AuthFeatureServiceState {
	authService: AuthService | null;
}

export const useAuthFeatureService = create<AuthFeatureServiceState>()(() => ({
	authService: null,
}));
