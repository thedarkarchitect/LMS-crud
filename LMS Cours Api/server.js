import express from 'express';
import morgan from 'morgan';
import courseRouter from './routes/course.routes.js';
import authRouter from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*', //wildcard is not for production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));
app.use('/auth/users', authRouter);
app.use('/api/courses', courseRouter);

export default app;