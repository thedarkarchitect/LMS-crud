import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";

const createJWTToken = (data) => {
    return jwt.sign(data, process.env.JWT_ACCESS_SECRET, { expiresIn: "24h" });
};

const checkForAuthToken = (req, res, next) => {
    // console.log(req.headers);
    if(req.headers.authorization) {
        let authHeader = req.headers.authorization;
        let token = authHeader.split(" ")[1]; //getting the token created by the jwt sign function

        if(token) {
            jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decodedToken) => { //using jwt to verify the token passed to it
                if(err) {
                    res.status(StatusCodes.FORBIDDEN).send("Invalid Token Provided");
                }else{
                    req.tokenData = decodedToken;
                    next();
                }
            });
        }else{
            res.status(StatusCodes.BAD_REQUEST).send("Auth Token is Missing");
        }
    }else{
        res.status(StatusCodes.BAD_REQUEST).send("Missing Authorization Header");
    }   
};

export { checkForAuthToken, createJWTToken };
