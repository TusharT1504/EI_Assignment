export interface Food {
  cost(): number;
  description(): string;
}

export class Bread implements Food {
  cost(): number {
    return 20;
  }
  description(): string {
    return "Bread";
  }
}

export abstract class Topping implements Food {
  constructor(protected base: Food) {}
  abstract cost(): number;
  abstract description(): string;
}

export class Cheese extends Topping {
  cost(): number {
    return this.base.cost() + 10;
  }
  description(): string {
    return this.base.description() + ", Cheese";
  }
}

export class Tomato extends Topping {
  cost(): number {
    return this.base.cost() + 5;
  }
  description(): string {
    return this.base.description() + ", Tomato";
  }
}

export class Onion extends Topping {
  cost(): number {
    return this.base.cost() + 7;
  }
  description(): string {
    return this.base.description() + ", Onion";
  }
}

export function runDecoratorPattern(): void {
  console.log("Running Decorator Pattern...");
  let sandwich: Food = new Bread();
  sandwich = new Cheese(sandwich);
  sandwich = new Tomato(sandwich);
  sandwich = new Onion(sandwich);
  console.log(`${sandwich.description()} -> ₹${sandwich.cost().toFixed(2)}`);
}
