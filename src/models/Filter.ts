import { Fuel } from "./enums/FuelEnum";

export interface ISelectedFilters {
  orderBy: string;
  order: ORDER;
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

export enum ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum ORDER_BY {
  ID = 'id',
  YEAR = 'year',
  PRICE = 'price',
  MILEAGE = 'mileage'
}

export const defaultFilters: ISelectedFilters = {
  orderBy: 'id',
  order: ORDER.DESC,
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

export interface IOrderOptions {
  title: string;
  orderBy: ORDER_BY;
  order: ORDER;
}

export const OrderOptions: IOrderOptions[] = [
  {
    title: 'Mais recentes',
    orderBy: ORDER_BY.ID,
    order: ORDER.DESC
  },
  {
    title: 'Preço (mais baixo)',
    orderBy: ORDER_BY.PRICE,
    order: ORDER.ASC
  },
  {
    title: 'Preço (mais alto)',
    orderBy: ORDER_BY.PRICE,
    order: ORDER.DESC
  },
  {
    title: 'Kms (mais baixo)',
    orderBy: ORDER_BY.MILEAGE,
    order: ORDER.ASC
  },
  {
    title: 'Kms (mais alto)',
    orderBy: ORDER_BY.MILEAGE,
    order: ORDER.DESC
  },
  {
    title: 'Ano (mais antigo)',
    orderBy: ORDER_BY.YEAR,
    order: ORDER.ASC
  },
  {
    title: 'Ano (mais recente)',
    orderBy: ORDER_BY.YEAR,
    order: ORDER.DESC
  }
];