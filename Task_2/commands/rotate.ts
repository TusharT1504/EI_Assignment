import { Command } from "./command";
import { Orientation, SatelliteState } from "../domain/state";

export class RotateCommand implements Command {
  constructor(private dir: Orientation) {}
  execute(state: SatelliteState): SatelliteState {
    const next = state.clone();
    next.orientation = this.dir;
    return next;
  }
  describe(): string {
    return `rotate(${this.dir})`;
  }
}
