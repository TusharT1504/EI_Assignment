export type Orientation = "North" | "South" | "East" | "West";
export type PanelStatus = "Active" | "Inactive";

export class SatelliteState {
  constructor(
    public orientation: Orientation = "North",
    public panels: PanelStatus = "Inactive",
    public dataCollected: number = 0
  ) {}

  clone(): SatelliteState {
    return new SatelliteState(this.orientation, this.panels, this.dataCollected);
  }
}
