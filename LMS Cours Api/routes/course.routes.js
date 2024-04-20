import { Router } from "express";
import { getCourses, createCourse, updateCourse, getCourseById, deleleCourse } from '../controller/course.controller.js';
import { validate, courseSchema } from "../utils/data-validator.js";
import { isAdmin } from "../utils/middleware.js"

const courseRouter = Router();

courseRouter.get('/', getCourses);

courseRouter.post('/', validate(courseSchema), createCourse);

courseRouter.patch('/:courseId', updateCourse);

courseRouter.get('/:courseId', getCourseById);

courseRouter.delete('/:courseId', deleleCourse);

export default courseRouter;