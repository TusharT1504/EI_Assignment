import { runFactoryPattern } from "../Task_1/creational/factory/notifications";
import { runBuilderPattern } from "../Task_1/creational/builder/pizza";
import { runObserverPattern } from "../Task_1/behavioral/observer/observer";
import { runStrategyPattern } from "../Task_1/behavioral/strategy/strategy";
import { runAdapterPattern } from "../Task_1/structural/adapter/adapter";
import { runDecoratorPattern } from "../Task_1/structural/decorator/decorator";

function getUserInput(): Promise<string> {
  return new Promise((resolve) => {
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

function showMenu() {
  console.log("\n=== Design Patterns Demo ===");
  console.log("1. Factory Pattern");
  console.log("2. Builder Pattern");
  console.log("3. Observer Pattern");
  console.log("4. Strategy Pattern");
  console.log("5. Adapter Pattern");
  console.log("6. Decorator Pattern");
  console.log("Type 'exit' to quit");
  console.log("Enter your choice: ");
}

(async () => {
  let continueRunning = true;
  
  while (continueRunning) {
    showMenu();
    
    const input = await getUserInput();
    
    if (input.toLowerCase() === 'exit') {
      console.log("Goodbye!");
      continueRunning = false;
      break;
    }
    
    const choice = parseInt(input);

    switch (choice) {
      case 1:
        console.log("Running Factory Pattern Demo...");
        await runFactoryPattern();
        break;
      case 2:
        console.log("Running Builder Pattern Demo...");
        runBuilderPattern();
        break;
      case 3:
        console.log("Running Observer Pattern Demo...");
        runObserverPattern();
        break;
      case 4:
        console.log("Running Strategy Pattern Demo...");
        runStrategyPattern();
        break;
      case 5:
        console.log("Running Adapter Pattern Demo...");
        runAdapterPattern();
        break;
      case 6:
        console.log("Running Decorator Pattern Demo...");
        runDecoratorPattern();
        break;
      default:
        console.log("Invalid choice! Please enter 1-6, or 'exit'");
        break;
    }
  }
  
  process.exit(0);
})();
