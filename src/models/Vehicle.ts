import { IMark } from "./Mark";
import { IModel } from "./Model";
import { Fuel } from "./enums/FuelEnum";
import { Transmission } from "./enums/TransmissionEnum";

export interface IVehicle {
  id: number;
  markId: number;
  mark: IMark;
  modelId: number;
  model: IModel;
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
  opportunity: boolean;
  sold: boolean;
}
