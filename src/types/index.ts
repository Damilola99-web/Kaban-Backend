export type GlobalError = Omit<Error, 'message'> & {
	statusCode?: number;
	message?: string;
};
