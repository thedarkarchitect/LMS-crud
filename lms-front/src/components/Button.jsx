import React from "react";
import { Link } from "react-router-dom";

const Button = ({buttonName}) => {
	return (
		<>
			<button
				type="submit"
				class="text-white ms-1 bg-blue-700 hover:bg-blue-800 px-[210px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				{buttonName}
			</button>
		</>
	);
};

export default Button;
