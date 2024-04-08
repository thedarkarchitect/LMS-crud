import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const CourseDetails = () => {
	const { id } = useParams();
	const course = useLoaderData().data;
  console.log(course)

	return (
		<>
			<DetailsCard
				courseName={course.title}
				description={course.description}
				id={course.id}
        instructor={course.instructor}
        price={course.price}
			/>
		</>
	);
};

const courseLoader = async ({ params }) => {
	const res = await fetch(`http://localhost:3001/api/courses/${params.id}`);
	const data = await res.json(); //get the data from the api as a json object
	return data;
};

export { CourseDetails as default, courseLoader };
