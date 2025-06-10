import { Subjects } from "./subjects"


export interface IOrderCancelledEvent {
    subject: Subjects.OrderCancelled,
    data: {
        id: string;
        version: number; // the version number of the order itselt
        ticket: {
            id: string;
        }
    }
}