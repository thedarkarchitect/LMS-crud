import {useState, useEffect, React} from 'react'
import Card from './Card';
import axios from 'axios';


const CourseCards = () => {
  const [courses, setCourses ] = useState([]);
  //USING AXIOS
  useEffect( () => {
    const fetchCourses = async () => {
      try{
        const res = await axios.get("http://localhost:3001/api/courses");
        // const data = await res.json();
        setCourses(res.data.courses); //data from the structure of the api
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    fetchCourses();

  }, []);

  // USING FETCH API
  // useEffect( () => {
  //   const fetchCourses = async () => {
  //     try{
  //       const res = await fetch("http://localhost:3001/api/courses");
  //       const data = await res.json();
  //       setCourses(data.courses); //data from the structure of the api
  //     } catch (error) {
  //       console.log('Error fetching data', error)
  //     }
  //   }
  //   fetchCourses();

  // }, []);  

  return (
    <>
        <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/> */}
            { courses.map((course) => (
              <Card key={course.id} CourseName={course.title} Instructor={course.instructor}/>
            )) }
        </div>
    </>
  )
}

export default CourseCards
