import React from "react";
import { Link } from "react-router-dom";


const Card = () => {
	return (
		<>
			<div class="block rounded-lg m-8 bg-gray-800 shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
				<div class="p-6">
					<h5 class="mb-2 text-xl font-medium leading-tight">
						Special title treatment
					</h5>
					<p class="mb-4 text-base">
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<Link
						type="button"
						to="/CourseDetails"
						class="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-accent-300 hover:shadow-blue-2 focus:bg-blue-accent-300 focus:shadow-blue-2 focus:outline-none focus:ring-0 active:bg-vlue-600 active:shadow-blue-2">
						Course Details
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;
