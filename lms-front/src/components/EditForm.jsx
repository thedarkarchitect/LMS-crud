import { useState } from "react";
import { useNavigate, useLoaderData } from 'react-router-dom';

const EditForm = ({ buttonName, route, courseSubmit }) => {
    const course = useLoaderData().data;
	const [title, setTitle] = useState(course.title);
	const [description, setDescription] = useState(course.description);
	const [instructor, setInstructor] = useState(course.instructor);
	const [price, setPrice] = useState(course.price);

	const navigate = useNavigate();

	const patchForm = (e) => {
		e.preventDefault();

		const updatedCourse = {
			title,
			description,
			instructor,
			price
		}
		// console.log(updatedCourse);

		courseSubmit(updatedCourse);

		return navigate(route);
	}

	return (
		<div className="m-8">
			<form className="max-w-md mx-auto" onSubmit={patchForm}>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="floating_title"
						id="floating_title"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<label
						htmlFor="floating_title"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Course Title
					</label>
				</div>

				<div className="relative z-0 w-full mb-5 group">
					<textarea
						type="text"
						name="floating_description"
						id="floating_description"
						rows="5"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<label
						htmlFor="floating_title"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Course Description
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="floating_instructor"
						id="floating_instructor"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={instructor}
						onChange={(e) => setInstructor(e.target.value)}
					/>
					<label
						htmlFor="floating_instructor"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Instructor
					</label>
				</div>

				<div className="relative z-0 w-full mb-5 group">
					<input
						type="number"
						name="floating_price"
						id="floating_price"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<label
						htmlFor="floating_price"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
						Course Price
					</label>
				</div>

					<button
						type="submit"
						className="text-white ms-1 bg-blue-700 hover:bg-blue-800 px-[210px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						{buttonName}
					</button>
				
			</form>
		</div>
	);
};

export default EditForm;
