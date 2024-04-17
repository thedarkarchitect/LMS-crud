import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";
import bcrypt from "bcrypt";
import { createJWTToken } from "../utils/jwt-auth.js";
import { validate } from "../utils/data-validator.js";

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
	const users = await prisma.user.findMany();
	res.status(StatusCodes.OK).json(users);
};

const createUser = async (req, res) => {
	try {
		const { email } = req.body; //check if there is a user with the same email

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (user != null && user.email === email) {
			res
				.status(StatusCodes.BAD_REQUEST)
				.json({ error: "User with email provided already exists" });
		} else {
			let hashedPassword = await bcrypt.hash(req.body.password, 12); //hash password using bcrypt

			const registerUser = await prisma.user.create({
				data: { ...req.body, age: +req.body.age, password: hashedPassword },
			});

			res
				.status(StatusCodes.CREATED)
				.json({ message: "User created Successfully", user: registerUser });
		}
	} catch (err) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: "No user registered", error: err });
	}
};

const userLogin = async (req, res) => {

	try {
        const { email, password } = req.body;

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			}
		});

		const pass = bcrypt.compareSync(password, user.password);

		if(pass){
            let userData = { name: user.name, userId: user.id, userRole: user.role };
            let accessToken = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" });
			res.json({token: accessToken});
            // res
			// .status(StatusCodes.CREATED)
			// .json({
			// 	message: "User Created",
			// 	accessToken: accessToken,
			// 	data: userData,
			// });
			
        } else {
            res
				.status(StatusCodes.BAD_REQUEST)
				.json({ error: "Password or Email is incorrect. Login again" });
        }
		// let refreshToken = jwt.sign
		
	} catch (error) {
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({
				message: "Password or Email is incorrect. Login again",
				details: error,
			});
	}
};

const logout = (req, res) => {
	return
};

const deleteUser = async (req, res) => {
	try{
		const id = +req.params.id;
		const user = await prisma.user.delete({
			where: {
				id : id
			}
		});
		res.json({message: "User deleted Successfully", user: user});
	} catch(err) {
		res.json({message: "User not deleted"});
	}
}

export { userLogin, getUsers, createUser, deleteUser, logout };
