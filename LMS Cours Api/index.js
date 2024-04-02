import express from 'express';
import morgan from 'morgan';
import courseRouter from './routes/course.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*', //wildcard is not for production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))
app.use('/api/courses', courseRouter);


app.listen(PORT, () =>{ console.log(`Server running on http://localhost:${PORT}/api/courses`) });