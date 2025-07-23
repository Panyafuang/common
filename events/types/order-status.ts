/**
 * ไฟล์นี้กำหนดสถานะ (Status) ทั้งหมดที่เป็นไปได้ของ Order
 */
export enum OrderStatus {
    /**
     * เมื่อ Order ถูกสร้าง, ยืนยันที่นั่งเรียบร้อย, และกำลังรอการชำระเงิน
     */
    Created = 'created',

    /**
   * เมื่อผู้ใช้ยกเลิก Order, Order หมดอายุ, หรือการชำระเงินล้มเหลว
   */
    Cancelled = 'cancelled',

    /**
     * The order has successfully reserved the ticket.
     */
    AwaitingPayment = 'awaiting:payment',

    /**
     * เมื่อชำระเงินสำหรับ Order นี้เรียบร้อยแล้ว
     */
    Complete = 'complete',


    /**
   * เมื่อ Order ถูกสร้างขึ้น แต่ยังไม่ได้ยืนยันการจองที่นั่งกับ Bus Service
   */
    AwaitingReservation = 'awaiting:reservation',


}