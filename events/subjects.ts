/**
 * ไฟล์นี้ทำหน้าที่กำหนด "ช่องสัญญาณ" หรือ "หัวข้อ" (Subject) ทั้งหมดที่มีใน NATS เพื่อให้ Publisher และ Listener รู้ว่าจะต้องส่งและรับ Event ที่ช่องไหน
 */
export enum Subjects {
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',

    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',

    ExpirationComplete = 'expiration:complete',

    PaymentCreated = 'payment:created',

    // --- New Events for Bus Reservation Flow ---
    BusScheduleCreated = 'bus:schedule:created',
    BusScheduleUpdated = 'bus:schedule:updated',

    /**
   * Event ที่ Order Service ส่งไปเพื่อ "ร้องขอ" การจองที่นั่งจาก Bus Service
   */
    BusReservationRequest = 'bus:reservation:request',
    /**
   * Event ที่ Bus Service ส่งกลับมาเพื่อ "ตอบ" คำร้องขอจองที่นั่ง
   */
    BusReservationComplete = 'bus:reservation:complete'
}