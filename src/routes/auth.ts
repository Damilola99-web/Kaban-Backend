import { GlobalError } from '@/types';
import express from 'express';
export const authRouter = express.Router();

authRouter.get('/users', (req, res) => {
	return res.status(200).json('hello users');
});

authRouter.post('/users', (req, res, next) => {
	const error: GlobalError = new Error('wetin sup');
	error.statusCode = 402;
	throw error
});
