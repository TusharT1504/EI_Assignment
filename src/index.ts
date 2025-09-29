import { runFactoryPattern } from "../Task_1/creational/factory/notifications";
import { runBuilderPattern } from "../Task_1/creational/builder/pizza";

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
      default:
        console.log("Invalid choice! Please enter 1, 2, or 'exit'");
        break;
    }
  }
  
  process.exit(0);
})();
