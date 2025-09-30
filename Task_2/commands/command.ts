import { SatelliteState } from "../domain/state";

export interface Command {
  execute(state: SatelliteState): SatelliteState;
  describe(): string;
}
