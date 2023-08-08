import { Mark } from "./Mark";
import { Model } from "./Model";
import { Fuel } from "./enums/FuelEnum";
import { Transmission } from "./enums/TransmissionEnum";

export interface Vehicle {
  id: number;
  markId: number;
  mark: Mark;
  modelId: number;
  model: Model;
  year: number;
  color: string;
  observations: string;
  mileage: number;
  price: number;
  fuelType: Fuel;
  version: string;
  doors: number;
  transmission: Transmission;
  engineSize: number;
  power: number;
  new: boolean;
  opportunity: boolean;
  sold: boolean;
}
