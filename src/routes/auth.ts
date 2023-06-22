import { GlobalError } from '@/types/index';
import express from 'express';
export const authRouter = express.Router();

authRouter.post('/register',[], );



authRouter.post('/users', (req, res, next) => {
	const error: GlobalError = new Error('wetin sup');
	error.statusCode = 402;
	throw error
});
