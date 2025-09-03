import { Subjects } from "./subjects";

export interface IPaymentSucceededEvent {
    subject: Subjects.PaymentSucceeded,
    data: {
        paymentId: string;     // payment id ใน DB ของ payments service
        orderId: string;
        userId: string;
        amount: number;        // satang (เช่น 49900 = ฿499.00)
        currency: string;      // 'thb' 
        method: 'card' | 'promptpay';
        providerPaymentId: string; // Stripe paymentIntent id
        paidAt: string;        // ISO date
        email: string;         // อีเมลผู้ซื้อ (ใช้ส่งใบเสร็จ)

        // Snapshot สำหรับแสดงในใบเสร็จ
        tickets?: Array<{
            scheduleId: string;
            busId: string;
            origin: string;
            destination: string;
            departureTime: string;    // ISO
            arrivalTime: string;      // ISO
            seatNumber: string;
            passengerName?: string;
            price: number;
        }>;
    };
}