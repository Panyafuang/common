import { Subjects } from "./subjects"

// Interface สำหรับข้อมูลตั๋วแต่ละใบใน Event
interface TicketInfo {
    scheduleId: string;
    seatNumber: string;
    price: number;
}

export interface IOrderCancelledEvent {
    subject: Subjects.OrderCancelled,
    data: {
        id: string;
        version: number; // the version number of the order itselt
        tickets: TicketInfo[];
    }
}