import { Subjects } from "./subjects";

/**
 * Interface สำหรับข้อมูล Snapshot ของ Schedule
 * ที่ Bus Service ส่งกลับมาให้ Order Service
 */
export interface IScheduleSnapshot {
    id: string;
    busId: string;
    origin: string;
    destination: string;
    departureTime: Date;
    arrivalDateTime: Date;
    price: number;
    version: number;
}

/**
 * Interface สำหรับ Event "คำตอบ" การจองที่นั่ง
 * ที่ Bus Service ส่งกลับไปยัง Order Service
 */
export interface IBusReservationCompleteEvent {
    subject: Subjects.BusReservationComplete;
    data: {
        orderId: string; // ID ของ Order ที่เป็นผู้ร้องขอ
        success: boolean; // ผลลัพธ์ว่าจองสำเร็จหรือไม่
        errorMessage?: string; // เหตุ (กรณีล้มเหลว)
        schedule?: IScheduleSnapshot; // ข้อมูล Snapshot (กรณีสำเร็จ)
    }
}