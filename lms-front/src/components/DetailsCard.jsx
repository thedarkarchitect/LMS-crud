import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DetailsCard = ({courseName, description, id, instructor, price}) => {
	const route = useNavigate();

	const onDeleteClick = async (id) => {
		const confirm = window.confirm("Are you sure you want to delete this course?");

		if (!confirm) return;

		await fetch(`http://localhost:3001/api/courses/${id}`, {
			method: "DELETE"
		});
		
		route("/");
	};

	return (
		<>
			{/* rounded-lg  shadow-sm bg-white dark:bg-gray-800 */}

			<div class="m-8">
				<figure class="rounded-lg shadow-sm items-center justify-center p-8 text-center bg-white dark:bg-gray-800">
					<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							{courseName}
						</h3>
						<p class="my-4">{ instructor }</p>
					</blockquote>
					<figcaption class="flex items-center justify-center ">
						<div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
							<div class="text-sm text-gray-500 dark:text-gray-400">
								{description}
							</div>
						</div>
					</figcaption>
					<p class="my-4 text-gray-200">Program Price: UGX { price }/= </p>
				</figure>
				
				{/* makes buttons tack in column on small screen and give them padding ad reduce size */}
				<div className="flex my-5 gap-20 justify-center">
					<Link to={`/EditCourse/${id}`}>
						<button
							type="submit"
							class="text-white ms-1 bg-blue-700 hover:bg-blue-800 px-[210px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Update
						</button>
					</Link>
					<button
						type="submit"
						onClick={ () => onDeleteClick(id) }
						class="text-white ms-1 bg-red-700 hover:bg-red-800 px-[210px] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
						Delete
					</button>
				</div>
			</div>
		</>
	);
};

export default DetailsCard;
