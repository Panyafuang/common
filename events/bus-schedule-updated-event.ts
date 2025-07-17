import { Subjects } from "./subjects";

export interface IBusScheduleUpdatedEvent {
  subject: Subjects.BusScheduleUpdated;
  data: {
    id: string;
    routeId: string;
    departureTime: string;
    price: number;
    version: number;
    isCancelled: boolean;
  };
}
