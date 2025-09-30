import { Command } from "../commands/command";
import { SatelliteState } from "../domain/state";

export class SatelliteController {
  constructor(private state: SatelliteState = new SatelliteState()) {}

  getState(): SatelliteState { return this.state; }

  run(command: Command): void {
    console.log(`Executing: ${command.describe()}`);
    this.state = command.execute(this.state);
    this.printState();
  }

  printState(): void {
    console.log(
      `State => Orientation: ${this.state.orientation}, Panels: ${this.state.panels}, Data: ${this.state.dataCollected}`
    );
  }
}
