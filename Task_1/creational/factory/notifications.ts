export interface Notification {
  send(message: string): Promise<void>;
}

export class EmailNotification implements Notification {
  constructor(private email: string) {}

  async send(message: string) {
    await new Promise((res) => setTimeout(res, 100));
    console.log(`[Email] to=${this.email}: ${message}`);
  }
}

export class SMSNotification implements Notification {
  constructor(private phone: string) {}

  async send(message: string) {
    await new Promise((res) => setTimeout(res, 50));
    console.log(`[SMS] to=${this.phone}: ${message}`);
  }
}

// Factory class
export type NotificationType = "email" | "sms";

export class NotificationFactory {
  create(type: NotificationType, target: string): Notification {
    if (type === "email") return new EmailNotification(target);
    return new SMSNotification(target);
  }
}


export async function runFactoryPattern() {
  console.log("Running Factory Method Pattern...");

  const factory = new NotificationFactory();

  const emailNotif = factory.create("email", "tushar@example.com");
  const smsNotif = factory.create("sms", "9876543210");

  await emailNotif.send("Hello via Email!");
  await smsNotif.send("Hello via SMS!");
}
