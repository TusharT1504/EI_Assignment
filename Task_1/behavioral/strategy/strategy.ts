export interface DiscountStrategy {
  apply(amount: number): number;
}

export class NoDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount;
  }
}

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  apply(amount: number): number {
    const discount = (this.percent / 100) * amount;
    return Math.max(0, amount - discount);
  }
}

export class FlatDiscount implements DiscountStrategy {
  constructor(private flat: number) {}
  apply(amount: number): number {
    return Math.max(0, amount - this.flat);
  }
}

export class Checkout {
  constructor(private strategy: DiscountStrategy) {}
  setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }
  total(amount: number): number {
    return this.strategy.apply(amount);
  }
}

export function runStrategyPattern(): void {
  console.log("Running Strategy Pattern (Discounts)...");
  const cartAmount = 1000;

  const checkout = new Checkout(new NoDiscount());
  console.log(
    `Cart: ₹${cartAmount.toFixed(2)} -> NoDiscount = ₹${checkout
      .total(cartAmount)
      .toFixed(2)}`
  );

  checkout.setStrategy(new PercentageDiscount(10));
  console.log(
    `Cart: ₹${cartAmount.toFixed(2)} -> 10% Off = ₹${checkout
      .total(cartAmount)
      .toFixed(2)}`
  );

  checkout.setStrategy(new FlatDiscount(150));
  console.log(
    `Cart: ₹${cartAmount.toFixed(2)} -> Flat ₹150 Off = ₹${checkout
      .total(cartAmount)
      .toFixed(2)}`
  );
}
