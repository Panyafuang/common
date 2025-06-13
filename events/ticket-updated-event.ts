import { Subjects } from "./subjects";


export interface ITicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        orderId?: string;
    }
}