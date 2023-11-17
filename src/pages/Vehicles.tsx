import HeroPages from "../components/HeroPages";
import { LinkType } from "../data/link";
import Footer from "../components/shared/footer/Footer";
import { getData } from "../services/AutoMoreiraService";
import { BASE_API_URL } from "../config/variables";
import { IVehicle } from "../models/Vehicle";
import AutoMoreiraLoader from "../components/shared/loader/AutoMoreiraLoader";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import VehicleCard from "../components/vehicle/card/VehicleCard";
import VehicleLenghtGrid from "../components/vehicle/grid/VehicleLenghtGrid";
import BookCar from "../components/vehicle/book-car/BookCar";
import { IMark } from "../models/Mark";
import { IModel } from "../models/Model";
import VehicleFilters from "../components/home/search-vehicle/SearchVehicle";
import {
  ISelectedFilters,
  maxKms,
  maxPrice,
  maxYear,
  minKms,
  minPrice,
  minYear,
} from "../models/Filter";
import { Filter } from "../components/home/search-vehicle/utils/Filter";

export default function Vehicles() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [marks, setMarks] = useState<IMark[]>([]);
  const [models, setModels] = useState<IModel[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({
    markId: null,
    modelId: null,
    fuelType: null,
    minYear: minYear,
    maxYear: maxYear,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minKms: minKms,
    maxKms: maxKms,
  });

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/vehicles"}`;
    getData<IVehicle[]>(`${endpoint}`)
      .then((data) => {
        setVehicles(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/marks"}`;
    getData<IMark[]>(`${endpoint}`)
      .then((data) => {
        setMarks(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/models"}`;
    getData<IModel[]>(`${endpoint}`)
      .then((data) => {
        setModels(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({ ...old, [id]: event }));

  return (
    <Box>
      <AutoMoreiraLoader open={isLoading} />

      <HeroPages id={LinkType.VEHICLES} />
      <VehicleFilters {...{ handleChange, marks, models, selectedFilters }} />
      <VehicleLenghtGrid length={vehicles.length} />

      <VehicleCard vehicles={vehicles} />

      <BookCar />

      <Footer />
    </Box>
  );
}
