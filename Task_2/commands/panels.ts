import { Command } from "./command";
import { SatelliteState } from "../domain/state";

export class ActivatePanelsCommand implements Command {
  execute(state: SatelliteState): SatelliteState {
    const next = state.clone();
    next.panels = "Active";
    return next;
  }
  describe(): string { return "activatePanels()"; }
}

export class DeactivatePanelsCommand implements Command {
  execute(state: SatelliteState): SatelliteState {
    const next = state.clone();
    next.panels = "Inactive";
    return next;
  }
  describe(): string { return "deactivatePanels()"; }
}
