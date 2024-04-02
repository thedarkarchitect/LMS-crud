import React from "react";
import Form from "../components/Form";
import axios from "axios";

const AddCoursePage = () => {
	const addCourse = async (newCourse) => {
		try{
      // await axios.post(
      //   "http://localhost:3001/api/courses", 
      //   {
      //     newCourse
      //   }
      // );
      const res = await fetch("http://localhost:3001/api/courses", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      alert('Course posted successfully!');
      return;
      
    } catch(error){
      console.log('Error:', error);
      alert('Failed to post course. Please try again later.');
    }
	};

	return (
		<>
			<Form buttonName={"Add"} route={"/"} courseSubmit={addCourse} />
		</>
	);
};

export default AddCoursePage;
