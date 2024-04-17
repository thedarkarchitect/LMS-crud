import { Router } from "express";
import { userLogin, getUsers, createUser, deleteUser, logout } from "../controller/auth.controller.js";
import {checkForAuthToken} from "../utils/jwt-auth.js";
import { validate, userSchema } from "../utils/data-validator.js";
import { isAdmin } from "../utils/middleware.js";


const authRouter = Router();

authRouter.get("/", [checkForAuthToken, isAdmin], getUsers);
authRouter.post("/register", createUser);
authRouter.post("/login", userLogin);
authRouter.delete("/logout", logout);
authRouter.delete("/deleteUser/:id", deleteUser);

export default authRouter; 