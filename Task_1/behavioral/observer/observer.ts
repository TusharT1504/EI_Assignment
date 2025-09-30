export interface Observer {
  update(symbol: string, price: number): void;
}

export class StockMarket {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  setPrice(symbol: string, price: number): void {
    this.notify(symbol, price);
  }

  private notify(symbol: string, price: number): void {
    for (const observer of this.observers) {
      observer.update(symbol, price);
    }
  }
}

export class MobileApp implements Observer {
  constructor(private user: string) {}
  update(symbol: string, price: number): void {
    console.log(`[Mobile:${this.user}] ${symbol} -> ${price.toFixed(2)}`);
  }
}

export class WebDashboard implements Observer {
  update(symbol: string, price: number): void {
    console.log(`[Web] ${symbol} current price: ${price.toFixed(2)}`);
  }
}

export function runObserverPattern(): void {
  console.log("Running Observer Pattern...");

  const market = new StockMarket();
  const mobile = new MobileApp("tushar");
  const web = new WebDashboard();

  market.subscribe(mobile);
  market.subscribe(web);

  market.setPrice("AAPL", 199.12);
  market.setPrice("GOOG", 2765.4);

  market.unsubscribe(web);
  market.setPrice("EI", 412.03);
}
