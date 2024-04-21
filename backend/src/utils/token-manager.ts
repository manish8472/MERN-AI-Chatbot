import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { COOKIE_NAME } from "./constansts.js";

export const createToken  = (id:string, email:string, expiresIn) =>{
    const palyload = {id, email};
    const token = jwt.sign(palyload , process.env.JWT_SECRET , {
        expiresIn,
    });
    return token;
};

export const veriyfyToken = async(
    req: Request,
    res: Response, 
    next: NextFunction
) =>{
    // find cookie is present or not

    const token = req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim() == "") {
        return res.status(401).json({message: "Token Expired"});
    }
    return new Promise<void>((resolve, reject ) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if(err){
                reject(err.message);
                return res.status(401).json({message:"Token Expired"});
            }
            else {
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        })
    });
}