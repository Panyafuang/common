import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";


export interface IOrderCreated {
    subject: Subjects.OrderCreated,
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        }
    }
}