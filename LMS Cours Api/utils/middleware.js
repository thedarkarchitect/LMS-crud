import { StatusCodes } from "http-status-codes";

function isAdmin(req, res, next) {
    if(req.tokenData.userRole === "ADMIN"){
        next();
    } else {
        res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"});
    }
}

function isStudent(req, res, next) {
    if(req.tokenData.userRole === "STUDENT"){
        next();
    } else {
        res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"});
    }
}

function isInstructor(req, res, next) {
    if(req.tokenData.userRole === "INSTRUCTOR"){
        next();
    } else {
        res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"});
    }
}

export {
    isAdmin,
    isStudent,
    isInstructor
};