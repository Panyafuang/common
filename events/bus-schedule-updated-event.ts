import { Subjects } from "./subjects";

/**
 * Interface สำหรับ Event "ประกาศ" การอัปเดตข้อมูลเที่ยวรถ
 * ที่ Bus Service ส่งออกไปให้ Service อื่นๆ ที่สนใจ
 */
export interface IBusScheduleUpdatedEvent {
  subject: Subjects.BusScheduleUpdated;
  data: {
    id: string; // ID ของ Schedule ที่ถูกอัปเดต
    routeId: string;
    departureTime: string;
    arrivalDateTime: string;
    price: number;
    availableSeats: number; // จำนวนที่นั่งว่างล่าสุด
    version: number;
    isCancelled: boolean;
  };
}