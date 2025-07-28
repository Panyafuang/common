import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

// Interface สำหรับข้อมูลตั๋วแต่ละใบใน Event
interface TicketInfo {
    scheduleId: string;
    seatNumber: string;
    price: number;
}

export interface IOrderCreatedEvent {
    subject: Subjects.OrderCreated,
    data: {
        id: string;
        version: number;
        status: OrderStatus;
        userId: string;
        expiresAt: string; // ส่งเป็น ISO String
        totalAmount: number; // <-- เพิ่ม totalAmount
        tickets: TicketInfo[]; // <-- เปลี่ยนจาก ticket เดี่ยวเป็น Array ของ tickets
    }
}