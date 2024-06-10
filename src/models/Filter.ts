import { Fuel } from "./enums/FuelEnum";

export interface ISelectedFilters {
  markId: number | null;
  modelId: number | null;
  fuelType: Fuel | null;
  minYear: number;
  maxYear: number;
  minPrice: number;
  maxPrice: number;
  minKms: number;
  maxKms: number;
}

export const minYear = 2000;
export const maxYear = new Date().getFullYear();
export const minPrice = 0;
export const maxPrice = 1000000;
export const minKms = 0;
export const maxKms = 1000000;
export const page = 1;
export const rowsPerPage = 6;

export const defaultFilters: ISelectedFilters = {
  markId: null,
  modelId: null,
  fuelType: null,
  minYear: minYear,
  maxYear: maxYear,
  minPrice: minPrice,
  maxPrice: maxPrice,
  minKms: minKms,
  maxKms: maxKms,
};
export enum FilterMode {
  HOME,
  VEHICLES,
}
