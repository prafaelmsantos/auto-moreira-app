/** @format */

import HeroPages from "../components/HeroPages";
import {LinkType} from "../data/link";
import Footer from "../components/shared/footer/Footer";
import {getData} from "../services/AutoMoreiraService";
import {BASE_API_URL} from "../config/variables";
import {IVehicle} from "../models/Vehicle";
import AutoMoreiraLoader from "../components/shared/loader/AutoMoreiraLoader";
import {Box} from "@mui/material";
import {useState, useEffect} from "react";
import VehicleCard from "../components/vehicle/card/VehicleCard";
import VehicleLenghtGrid from "../components/vehicle/grid/VehicleLenghtGrid";
import BookCar from "../components/vehicle/book-car/BookCar";
import SearchVehicle from "../components/home/search-vehicle/SearchVehicle";
import {FilterMode, ISelectedFilters, defaultFilters} from "../models/Filter";
import {useQuery} from "@apollo/client";
import {VEHICLES} from "../queries/Vehicles";
import {vehicles} from "../queries/types/vehicles";

export default function Vehicles() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [selectedFilters, setSelectedFilters] =
    useState<ISelectedFilters>(defaultFilters);

  const markId = selectedFilters.markId
    ? {in: [selectedFilters.markId]}
    : {nin: [0]};

  const modelId = selectedFilters.modelId
    ? {in: [selectedFilters.modelId]}
    : {nin: [0]};

  const {data, loading, error, fetchMore} = useQuery<vehicles>(VEHICLES, {
    variables: {
      filter: {
        markId: markId,
        and: {modelId: modelId, and: {fuelType: {eq: "DIESEL"}}},
      },
    },
  });

  console.log(data?.vehicles?.nodes);

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

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({...old, [id]: event}));

  /*   const handleSubmit = useCallback(() => {
    
    setVehicles(
      vehicles.filter(
        (x) =>
          (!!selectedFilters.markId
            ? x.markId === selectedFilters.markId
            : x.markId !== 0) &&
          (!!selectedFilters.modelId
            ? x.modelId === selectedFilters.modelId
            : x.modelId !== 0) &&
          (!!selectedFilters.fuelType
            ? x.fuelType === selectedFilters.fuelType
            : x.fuelType === Fuel.DIESEL ||
              x.fuelType === Fuel.HYBRID ||
              x.fuelType === Fuel.PETROL) &&
          x.year >= selectedFilters.minYear &&
          x.year <= selectedFilters.maxYear &&
          x.price >= selectedFilters.minPrice &&
          x.price <= selectedFilters.maxPrice &&
          x.mileage >= selectedFilters.minKms &&
          x.mileage <= selectedFilters.maxKms
      )
    );
  }, [selectedFilters, vehicles]); */

  return (
    <Box>
      <AutoMoreiraLoader open={isLoading} />
      <HeroPages id={LinkType.VEHICLES} />

      <SearchVehicle
        filterMode={FilterMode.VEHICLES}
        {...{
          handleChange,
          selectedFilters,
          setSelectedFilters,
        }}
      />
      <VehicleLenghtGrid length={vehicles.length} />
      <VehicleCard vehicles={vehicles} />
      <BookCar />
      <Footer />
    </Box>
  );
}
