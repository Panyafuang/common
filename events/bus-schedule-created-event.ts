import { Subjects } from "./subjects";

export interface IBusScheduleCreatedEvent {
  subject: Subjects.BusScheduleCreated;
  data: {
    id: string; // ID นี้ต้องตรงกับ ID ของ BusSchedule ต้นฉบับ (Schedule 1: วันที่ 2025-07-08, 08:00 AM, ราคา 700 บาท, รถบัส "XYZ123")
    routeId: string;
    departureTime: string;
    arrivalTime: string;
    price: number;
    version: number;
  };
}
