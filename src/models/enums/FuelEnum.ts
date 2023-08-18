export enum Fuel {
  PETROl = "Petrol",
  DIESEL = "Diesel",
  HYBRID = "Hybrid",
}

export function FuelTypeConverted(fuelType: Fuel) {
  switch (fuelType) {
    case Fuel.PETROl:
      return "Gasolina";
    case Fuel.DIESEL:
      return "Gasóleo";
    case Fuel.HYBRID:
      return "Híbrido";
    default:
      return "Híbrido";
  }
}
