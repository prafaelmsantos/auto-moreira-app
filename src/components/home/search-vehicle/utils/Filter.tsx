import { useEffect, useState } from "react";
import { ISelectedFilters } from "../../../../models/Filter";
import { IVehicle } from "../../../../models/Vehicle";

export function Filter(filters: ISelectedFilters, vehicles: IVehicle[]) {
  const [vehiclesFiltered, setVehiclesFiltered] = useState<IVehicle[]>([]);

  useEffect(() => {
    setVehiclesFiltered(vehicles);
  }, [vehicles]);

  useEffect(() => {
    if (filters.markId) {
      setVehiclesFiltered((old) =>
        old.filter((x) => x.markId === filters.markId)
      );
    }
    if (filters.modelId) {
      setVehiclesFiltered((old) =>
        old.filter((x) => x.modelId === filters.modelId)
      );
    }
    if (filters.fuelType) {
      setVehiclesFiltered((old) =>
        old.filter((x) => x.fuelType === filters.fuelType)
      );
    }

    setVehiclesFiltered((old) =>
      old.filter(
        (x) =>
          x.year >= filters.minYear &&
          x.year <= filters.maxYear &&
          x.price >= filters.minPrice &&
          x.price <= filters.maxPrice &&
          x.mileage >= filters.minKms &&
          x.mileage <= filters.maxKms
      )
    );
  }, [filters]);

  return vehiclesFiltered;
}
