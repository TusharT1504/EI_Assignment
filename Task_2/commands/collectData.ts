import { Command } from "./command";
import { SatelliteState } from "../domain/state";

export class CollectDataCommand implements Command {
  constructor(private units: number = 10) {}
  execute(state: SatelliteState): SatelliteState {
    const next = state.clone();
    if (next.panels !== "Active") {
      console.log("Cannot collect data: panels are not Active.");
      return next;
    }
    next.dataCollected += this.units;
    return next;
  }
  describe(): string { return `collectData(+${this.units})`; }
}
