import { IModel } from "./Model";
import { Fuel, FuelTypeGraphQLConverted } from "./enums/FuelEnum";
import { Transmission, TransmissionGraphQLConverted } from "./enums/TransmissionEnum";
import {  vehicles_vehicles_nodes } from "../queries/types/vehicles";

export interface IVehicle {
  id: number;
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

export function convertToVehicle(vehicle: vehicles_vehicles_nodes): IVehicle {
  return {
    id: vehicle.id,
    modelId: vehicle.modelId,
    model: {
      id: vehicle.modelId,
      name: vehicle.model?.name ?? '',
      markId: vehicle.model?.markId ?? 0,
      mark: {
        id: vehicle.model?.markId ?? 0,
        name: vehicle.model?.mark?.name ?? ''
      }
    },
    year: vehicle.year,
    color: vehicle?.color ?? '',
    observations: vehicle?.observations ?? '',
    mileage: vehicle.mileage,
    price: vehicle.price,
    fuelType: FuelTypeGraphQLConverted(vehicle.fuelType),
    version: vehicle.version ?? '',
    doors: vehicle.doors,
    transmission: TransmissionGraphQLConverted(vehicle.transmission),
    engineSize: vehicle.engineSize,
    power: vehicle.power,
    opportunity: vehicle.opportunity,
    sold: vehicle.sold
  };
}