import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";



/**
 * this function not try to catch errors, but try to produce errors we want to thow errors if the request is not valid.
 */
export const validateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    console.log('errors ->  ',errors)

    if (!errors.isEmpty()) {
        /** ส่งไปที่ middlewares -> error-handler.ts -> errorHandler() */
        throw new RequestValidationError(errors.array());
    }

    next();
};