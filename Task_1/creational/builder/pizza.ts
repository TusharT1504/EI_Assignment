export class Pizza {
  public size!: string;
  public cheese: boolean = false;
  public pepperoni: boolean = false;
  public onion: boolean = false;

  describe(): string {
    return `Pizza [size=${this.size}, cheese=${this.cheese}, pepperoni=${this.pepperoni}, onion=${this.onion}]`;
  }
}

export class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size: "small" | "medium" | "large"): PizzaBuilder {
    this.pizza.size = size;
    return this;
  }

  addCheese(): PizzaBuilder {
    this.pizza.cheese = true;
    return this;
  }

  addPepperoni(): PizzaBuilder {
    this.pizza.pepperoni = true;
    return this;
  }

  addOnion(): PizzaBuilder {
    this.pizza.onion = true;
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

export function runBuilderPattern() {
  console.log("Running Builder Pattern...");

  const myPizza = new PizzaBuilder()
    .setSize("large")
    .addCheese()
    .addPepperoni()
    .addOnion()
    .build();

  console.log(myPizza.describe());
}
