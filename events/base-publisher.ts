import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface IEvent {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends IEvent> {
  abstract subject: T["subject"];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
            reject(err);
        }
        console.log(`Event published to subject: ${this.subject}`);
        resolve();
      });
    });
  }
}
