import { Message, Stan, Subscription } from "node-nats-streaming";
import { Subjects } from "./subjects";


interface IEvent {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends IEvent> {
  abstract subject: T['subject'];
  abstract queueGroupName: string;
  abstract onMessage(data: T['data'], msg: Message): void;
  protected client: Stan;
  protected ackWait = 5 * 1000;

  // --- 1. เพิ่ม Property นี้เข้ามา ---
  // ประกาศ property 'subscription' เพื่อเก็บ object ของ NATS subscription
  // ใช้ '!' (Non-null Assertion Operator) เพื่อบอก TypeScript ว่าเราจะกำหนดค่าให้มันแน่นอน (ใน listen())
  protected subscription!: Subscription;

  constructor(client: Stan) {
    this.client = client;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen() {
    this.subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    this.subscription.on("message", (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      const parsedData = this.parseMessage(msg);
      /**
       * - คลาสลูกจะ implement เอง ว่าจะให้ทำอะไรกับ message ที่ได้รับ
       * - คลาสแม่จะ ไม่รู้รายละเอียด แต่จะ "ไว้ใจ" ให้คลาสลูกจัดการเอง
       */
      this.onMessage(parsedData, msg);
    });
  }

  parseMessage(msg: Message) {
    const data = msg.getData();

    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf-8"));
  }
}