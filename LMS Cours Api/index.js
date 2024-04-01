import express from 'express';
import morgan from 'morgan';
import courseRouter from './routes/course.routes.js';

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/courses', courseRouter);


app.listen(PORT, () =>{ console.log(`Server running on http://127.0.0.1/${PORT}/api/courses`) });