import joi from "joi";

//joi schemas
const courseSchema = joi.object({ 
	title: joi.string().required(),
	description: joi.string().min(20).max(256).required(),
	instructor: joi.string().max(50).required(),
	price: joi.number().required(),
});


const userSchema = joi.object({
	name: joi.string().max(50).required(),
	email: joi.string().email().required(),
	age: joi.number().required(),
	role: joi.string().valid("ADMIN", "STUDENT", "INSTRUCTOR").required(),
});


function validate(schema) { // function to validate the schemas
	return (req, res, next) => {
		const result = schema.validate(req.body);
		if (result.error) {
			res.json(result.error); //show the error in the schema
		} else {
			next(); //else move on to the next middleware or the next execution
		}
	};
}

export { validate, courseSchema, userSchema };
