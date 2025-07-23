import { Subjects } from "./subjects";

/**
 * Interface สำหรับ Event "ร้องขอจองที่นั่ง"
 * ที่ Order Service ส่งไปยัง Bus Service
 */
export interface IBusReservationRequestEvent {
    subject: Subjects.BusReservationRequest;
    data: {
        scheduleId: string;
        seat: string[]; // Array ของหมายเลขที่นั่งที่ต้องการจอง
        orderId: string;
        version: number;
    }
}