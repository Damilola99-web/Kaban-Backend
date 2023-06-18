import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import morgan from 'morgan';
import { connectDB } from '@/database/db';
import { GlobalError } from './types';
import { logger } from './utils/logger';
import rootRouter from './route';
import { apiRequestLimiter } from './middlewares';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(apiRequestLimiter);

app.get('/health-check', (req, res) => {
	logger.info('Checking API status: Everything is OK');
	return res.status(200).json({ message: 'Server is up and running' });
});

app.use('/api/v1', rootRouter);

app.use((req, res) => {
	return res.status(404).json({
		statusCode: 404,
		message: `404 not found. Cannot ${req.method.toLowerCase()} ${req.url}`,
	});
});

app.use((error: GlobalError, req: Request, res: Response, next: NextFunction) => {
	return res
		.status(error.statusCode || 500)
		.json({ statusCode: error.statusCode, message: error.message });
});

// connectDB()
// 	.then(() => {
app.listen(5000, () => logger.info('Server running on port 5000'));
// })
// .catch((error: any) => {
// 	logger.error(`Error: ${error.message}`);
// 	process.exit(1);
// });

// open api
// node dev ts
