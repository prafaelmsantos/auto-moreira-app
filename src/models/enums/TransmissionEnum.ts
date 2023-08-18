export enum Transmission {
  MANUAL = "Manual",
  AUTOMATIC = "Automatic",
}

export function TransmissionConverted(transmission: Transmission) {
  switch (transmission) {
    case Transmission.AUTOMATIC:
      return "Automático";
    case Transmission.MANUAL:
      return "Manual";
    default:
      return "Manual";
  }
}
