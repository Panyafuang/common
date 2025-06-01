export enum OrderStatus {
    /**
     * - Order has been created, But the ticket it is try to order has not been reserved. (ตั๋วที่กำลังพยายามสั่งซื้อนั้นยังไม่ได้ถูกจองไว้)
     */
    Created = 'created',

    /**
     * - The order expires before payment.
     * - The ticket the order is trying to reserve has already been reserved, or when the user has cancelled the order.(ตั๋วนี้ถูกคนอื่นจองไปก่อนหรือคำสั่งซื้อนั้นถูกยกเลิกก่อนการยืนยัน)
     */
    Cancelled = 'cancelled',
    
    /**
     * The order has successfully reserved the ticket.
     */
    AwaitingPayment = 'awaiting:payment',

    /**
     * The order has reserved and the user has provided payment successfully.
     */
    Complete = 'complete'
}