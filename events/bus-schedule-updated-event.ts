import { Subjects } from "./subjects";

export interface IBusScheduleUpdatedEvent {
  subject: Subjects.BusScheduleUpdated;
  data: {
    id: string;
    routeId: string;
    departureTime: Date;
    price: number;
    version: number;
  };
}
