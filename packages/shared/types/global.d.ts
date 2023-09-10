import { type HttpStatusCode } from 'axios';

declare global {
	// * global for integrate API
	type Id = string;

	interface ServerResponse<T> {
		success: boolean;
		statusCode: HttpStatusCode;
		message: string;
		data: T;
	}

	type APIFilter = Record<string, any>;

	interface Pagination {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	}
}
