/** @format */

import {IModel} from "./Model";
import {Fuel, FuelTypeGraphQLConverted} from "./enums/FuelEnum";
import {
  Transmission,
  TransmissionGraphQLConverted,
} from "./enums/TransmissionEnum";
import {
  vehicles_vehicles_nodes,
  vehicles_vehicles_nodes_vehicleImages,
} from "./GraphQL/types/vehicles";
import {ReactImageGalleryItem} from "react-image-gallery";
import defaultVehicle from "../images/defaultVehicle.jpg";

export interface IVehicle {
  id: number;
  modelId: number;
  model: IModel;
  year: number;
  color: string | null;
  observations: string | null;
  mileage: number;
  price: number;
  fuelType: Fuel;
  version: string | null;
  doors: number;
  transmission: Transmission;
  engineSize: number;
  power: number;
  opportunity: boolean;
  sold: boolean;
  vehicleImages: IVehicleImage[];
}

export interface IVehicleImage {
  id: number;
  url: string;
  isMain: boolean;
}

export function ConvertToReactImageGalleryItem(
  vehicleImage: IVehicleImage
): ReactImageGalleryItem {
  return {
    original: vehicleImage.url,
    thumbnail: vehicleImage.url,
  };
}

export function convertToVehicleImage(
  vehicleImage: vehicles_vehicles_nodes_vehicleImages
): IVehicleImage {
  return {
    id: vehicleImage.id,
    url: vehicleImage.url ?? "",
    isMain: vehicleImage.isMain
  };
}

export function convertToVehicle(vehicle: vehicles_vehicles_nodes): IVehicle {
  return {
    id: vehicle.id,
    modelId: vehicle.modelId,
    model: {
      id: vehicle.modelId,
      name: vehicle.model?.name ?? "",
      markId: vehicle.model?.markId ?? 0,
      mark: {
        id: vehicle.model?.markId ?? 0,
        name: vehicle.model?.mark?.name ?? "",
      },
    },
    year: vehicle.year,
    color: vehicle.color,
    observations: vehicle.observations,
    mileage: vehicle.mileage,
    price: vehicle.price,
    fuelType: FuelTypeGraphQLConverted(vehicle.fuelType),
    version: vehicle.version,
    doors: vehicle.doors,
    transmission: TransmissionGraphQLConverted(vehicle.transmission),
    engineSize: vehicle.engineSize,
    power: vehicle.power,
    opportunity: vehicle.opportunity,
    sold: vehicle.sold,
    vehicleImages:
      vehicle.vehicleImages?.map((x) => convertToVehicleImage(x!)) ?? [],
  };
}

export const defaultImage: ReactImageGalleryItem[] = [
  {
    original: defaultVehicle,
    thumbnail: defaultVehicle,
  },
];
