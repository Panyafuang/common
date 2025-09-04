import { Subjects } from "./subjects";

export interface IPaymentCreatedEvent {
    subject: Subjects.PaymentCreated,
    data: {
        id: string;         // payment id (payments DB)
        orderId: string;
        stripeId: string;   // providerPaymentId
        email?: string;      // email ผู้ชำระ (จาก Stripe หรือฟอร์ม)
        method?: 'card' | 'promptpay';
    }
}