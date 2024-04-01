import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


const getCourses = async (req, res) => {
  const allCourses = await prisma.course.findMany()
  // const reply = JSON.stringify(allCourses);
  // console.log(reply)
    res.json({
      status: "success",
      count: allCourses.length,
      data: {
        courses : allCourses
      }
    });
};

const createCourse = async (req, res) => {

   try{ 
    const newCourse = await prisma.course.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        price: req.body.price
      }
    });
    res.json({
      message: 'Course added successfully',
      data: newCourse
    });
  }catch(e){
    console.log(e);
    res.status(400).json(
      {message: 'Course not added!'}
    );
  }

};

const updateCourse = async (req, res) => {
    let id = +req.params.courseId;

    try{
      const updatedCourse = await prisma.course.update({
        where: { id: id },
        data: req.body
      });

      res.json({
        message: 'Course updated!',
        data: updatedCourse
      });
    }catch(e){
      console.log(e);
      res.json({ message: 'failed to update course!' });
    };

};

const getCourseById = async (req, res) => {
    let id = +req.params.courseId;

    try{
      const courseById = await prisma.course.findUnique({
        where:{
          id: id
        }
      });
      res.json({ message: 'Course has been returned by id provided', data: courseById });
    }catch(e){
      console.log(e);
      res.json({ message: 'Course is not shown by the id provided!' });
    }
  
};

const deleleCourse = async (req, res) => {
    const id = +req.params.courseId;

    try{
      const deletedById = await prisma.course.delete({
        where: {
          id: id
        }
      });
      res.json({ message: 'Deleted Successfully!', data: deletedById });
    }catch(e){
      console.log(e);
      res.json({ message: 'Not Deleted!' });
    }

};

export {
  getCourses,
  createCourse,
  updateCourse,
  getCourseById,
  deleleCourse
}