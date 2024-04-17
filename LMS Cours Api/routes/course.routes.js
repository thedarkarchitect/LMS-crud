import { Router } from "express";
import { getCourses, createCourse, updateCourse, getCourseById, deleleCourse } from '../controller/course.controller.js';
import { validate, courseSchema } from "../utils/data-validator.js";

const courseRouter = Router();

// courseRouter.get('/', showLogin);

// courseRouter.post('/login', loginPost);

// courseRouter.get('/node-course', showCoursePage);

courseRouter.get('/', getCourses);

courseRouter.post('/', validate(courseSchema), createCourse);

courseRouter.patch('/:courseId', [validate(courseSchema) ], updateCourse);

courseRouter.get('/:courseId', getCourseById);

courseRouter.delete('/:courseId', deleleCourse);

export default courseRouter;