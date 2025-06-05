import { Subjects } from "./subjects"


export interface IOrderCancelled {
    subject: Subjects.OrderCancelled,
    data: {
        id: string;
        ticket: {
            id: string;
        }
    }
}