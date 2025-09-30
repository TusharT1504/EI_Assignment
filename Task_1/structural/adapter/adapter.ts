// Adapter Pattern: Simple message sender adapting WhatsApp to a generic sender

export interface MessageService {
  send(to: string, text: string): void;
}

class WhatsAppAPI {
  sendMessage(payload: { phone: string; message: string }): void {
    console.log(
      `WhatsApp -> to: ${payload.phone}, msg: "${payload.message}"`
    );
  }
}

export class WhatsAppAdapter implements MessageService {
  constructor(private api: WhatsAppAPI = new WhatsAppAPI()) {}
  send(to: string, text: string): void {
    this.api.sendMessage({ phone: to, message: text });
  }
}


export class SmsService implements MessageService {
  send(to: string, text: string): void {
    console.log(`SMS -> to: ${to}, msg: "${text}"`);
  }
}

export function runAdapterPattern(): void {
  console.log("Running Adapter Pattern...");
  const sms: MessageService = new SmsService();
  sms.send("9876543210", "Hello from SMS");

  const whatsapp: MessageService = new WhatsAppAdapter();
  whatsapp.send("9876543210", "Hello from WhatsApp via Adapter");
}