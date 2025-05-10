import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

/** Error handling middleware 
 * this function try to catch errors
*/
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ 
      errors: err.serializeErrors() 
    });
  }

  /**
   * errors ที่ CustomError ที่สร้างขึ้นมาจับไม่ได้
   */
  console.error(err);
  res.status(400).send({
    errors: [
      { message: 'Something went wrong'}
    ]
  });
  return;
};
