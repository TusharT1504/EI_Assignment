import { Orientation } from "../domain/state";
import { SatelliteController } from "../controller/controller";
import { RotateCommand } from "../commands/rotate";
import { ActivatePanelsCommand, DeactivatePanelsCommand } from "../commands/panels";
import { CollectDataCommand } from "../commands/collectData";

export async function runSatelliteCli(): Promise<void> {
  console.log("\n=== Satellite Command System ===");
  console.log("Commands:");
  console.log(" rotate <North|South|East|West>");
  console.log(" activatePanels");
  console.log(" deactivatePanels");
  console.log(" collectData [units]   # default +10");
  console.log(" exit");

  const controller = new SatelliteController();
  controller.printState();

  function read(): Promise<string> {
    return new Promise((resolve) => {
      process.stdin.once("data", (d) => resolve(d.toString().trim()));
    });
  }

  while (true) {
    process.stdout.write("> ");
    const line = await read();
    if (!line) continue;
    const tokens = line.trim().split(/\s+/);
    const cmd = tokens[0].toLowerCase();
    const args = tokens.slice(1);

    switch (cmd) {
      case "rotate": {
        const dir = (args[0] as Orientation) || "North";
        if (!["North", "South", "East", "West"].includes(dir)) {
          console.log("Invalid direction. Use North|South|East|West");
          break;
        }
        controller.run(new RotateCommand(dir));
        break;
      }
      case "activatepanels":
        controller.run(new ActivatePanelsCommand());
        break;
      case "deactivatepanels":
        controller.run(new DeactivatePanelsCommand());
        break;
      case "collectdata": {
        const units = Number(args[0] ?? 10);
        if (Number.isNaN(units) || units <= 0) {
          console.log("Units must be a positive number.");
          break;
        }
        controller.run(new CollectDataCommand(units));
        break;
      }
      case "exit":
        console.log("Exiting Satellite CLI. Bye!");
        return;
      default:
        console.log("Unknown command. Try: rotate, activatePanels, deactivatePanels, collectData, exit");
        break;
    }
  }
}
