import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface IUserPayload {
    id: string;
    email: string;
}
/** Add property currentUser TO Request */
declare global {
    namespace Express {
        interface Request {
            currentUser?: IUserPayload;
        }
    }
}

/** ตรวจสอบ JWT token ใน session และแนบข้อมูลผู้ใช้ไว้ใน request ถ้ามี token ที่ถูกต้อง */
export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    /**
     * ตรวจสอบว่า session ไม่มี jwt หรือไม่
       ถ้าไม่มี token เลย → ไปที่ middleware ตัวถัดไปทันที (ไม่ต้องทำอะไร)
     */
    if (!req.session?.jwt) {
        return next();
    }

    /**
     * พยายาม verify JWT token ด้วย jwt.verify() (มาจากไลบรารี jsonwebtoken)

        ใช้ process.env.JWT_KEY! เป็น secret key ในการตรวจสอบลายเซ็นต์ของ token

        ! คือการบอก TypeScript ว่า "เชื่อฉันเถอะ ตัวแปรนี้ไม่ใช่ undefined"

        ถ้า token ถูกต้อง → แปลงผลลัพธ์ให้เป็น IUserPayload และเก็บไว้ใน req.currentUser

        ถ้า token ผิด / หมดอายุ → ไม่ทำอะไร และไม่โยน error ใด ๆ
     */
    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as IUserPayload;
        req.currentUser = payload;
    } catch (err) { }

    /** ไปยัง middleware ตัวถัดไปเสมอ ไม่ว่าจะมี user หรือไม่ */
    next();
}