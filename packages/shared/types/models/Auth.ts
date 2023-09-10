export interface Token {
	accessKey: string | null;
	refreshToken: string | null;
}

export type TenantInfo = Record<string, any>;

export interface Auth {
	_id: Id;
	isAdminBiso24: boolean;
	applicationIds: Id[];
	tenantRoleId: Id;
	email: string;
	emailVerifiedAt: null;
	remember: boolean;
	fullName: string;
	superAdmin: boolean;
	limitLoginAttempts: number;
	lastLogin: null;
	isPassChanged: boolean;
	phoneNumber: null;
	departmentId: Id;
	positionId: Id;
	tenantInfo: TenantInfo;
	token: Token;
	[key: string]: any;
}
