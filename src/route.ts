import express from 'express';
import { authRouter } from './routes/auth';
const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);

export default rootRouter;
