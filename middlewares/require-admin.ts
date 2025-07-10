import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';


export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    // Middleware นี้ต้องถูกใช้ *หลังจาก* currentUser
    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }

     // ตรวจสอบค่า role จาก currentUser
     if (!req.currentUser.role) {
        throw new NotAuthorizedError();
     }

     // ถ้าเป็น admin ให้ผ่านไปทำงานใน route handler ต่อไป
     next();
};