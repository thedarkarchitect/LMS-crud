import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditCourse = () => {
	const { id } = useParams();
	const updatedCourse = async (updatedCourse) => {
    // console.log(updatedCourse)
		try {
			await fetch(`http://localhost:3001/api/courses/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedCourse),
			});
			alert("Course updated successfully!");
		} catch (error) {
			console.log("Error:", error);
			alert("Failed to post course. Please try again later.");
		}
	};

	return (
		<>
			<EditForm buttonName={"Update"} route= {`/CourseDetails/${id}`} courseSubmit={updatedCourse}/>
		</>
	);
};

export default EditCourse;
