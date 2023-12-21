/** @format */

import HeroPages from "../components/HeroPages";
import {LinkType} from "../data/link";
import Footer from "../components/shared/footer/Footer";
import {getData} from "../services/AutoMoreiraService";
import {BASE_API_URL} from "../config/variables";
import {convertToVehicle, IVehicle} from "../models/Vehicle";
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
import {vehicles, vehicles_vehicles_nodes} from "../queries/types/vehicles";
import {Fuel} from "../models/enums/FuelEnum";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../redux/hooks";
import {RootState} from "../redux/store";
import {setCurrentFilters} from "../config/LocalStorage";

export default function Vehicles() {
  const currentFilters = useSelector(
    (state: RootState) => state.filtersSlice.filters
  );

  const [selectedFilters, setSelectedFilters] =
    useState<ISelectedFilters>(defaultFilters);

  const [selectedFinalFilters, setSelectedFinalFilters] =
    useState<ISelectedFilters>(currentFilters ?? defaultFilters);

  const markId = selectedFinalFilters.markId
    ? {in: [selectedFinalFilters.markId]}
    : {nin: [0]};

  const modelId = selectedFinalFilters.modelId
    ? {in: [selectedFinalFilters.modelId]}
    : {nin: [0]};

  const fuelType = selectedFinalFilters.fuelType
    ? {
        eq:
          selectedFinalFilters.fuelType === Fuel.DIESEL
            ? "DIESEL"
            : selectedFinalFilters.fuelType === Fuel.PETROL
              ? "PETROL"
              : "HYBRID",
      }
    : {in: ["PETROL", "DIESEL", "HYBRID"]};

  const year = {
    gt: selectedFinalFilters.minYear,
    lt: selectedFinalFilters.maxYear,
  };

  const price = {
    gt: selectedFinalFilters.minPrice,
    lt: selectedFinalFilters.maxPrice,
  };

  const kms = {
    gt: selectedFinalFilters.minKms,
    lt: selectedFinalFilters.maxKms,
  };

  const {data, loading} = useQuery<vehicles>(VEHICLES, {
    variables: {
      filter: {
        markId: markId,
        and: {
          modelId: modelId,
          and: {
            fuelType: fuelType,
            and: {year: year, and: {price: price, and: {mileage: kms}}},
          },
        },
      },
    },
  });

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({...old, [id]: event}));

  const handleClear = () => {
    setSelectedFilters(defaultFilters);
    setSelectedFinalFilters(defaultFilters);
  };
  const handleSubmit = () => {
    setCurrentFilters(selectedFilters, dispatch);
    setSelectedFinalFilters(selectedFilters);
  };

  const dispatch = useAppDispatch();

  /*   useEffect(() => {
    currentFilters && setSelectedFilters(currentFilters);
  }, [currentFilters]); */

  /*   useEffect(() => {
    currentFilters && setSelectedFilters(currentFilters);
  }, [currentFilters]); */

  useEffect(() => {
    currentFilters !== selectedFinalFilters &&
      setSelectedFinalFilters(currentFilters);
  }, [loading]);

  console.log(data?.vehicles?.nodes);

  console.log(selectedFinalFilters);

  return (
    <Box>
      <AutoMoreiraLoader open={loading} />
      <HeroPages id={LinkType.VEHICLES} />

      <SearchVehicle
        filterMode={FilterMode.VEHICLES}
        {...{
          handleChange,
          selectedFilters,
          setSelectedFilters,
          handleClear,
          handleSubmit,
        }}
      />
      <VehicleLenghtGrid length={data?.vehicles?.nodes?.length ?? 0} />
      <VehicleCard
        vehicles={
          data?.vehicles?.nodes?.map((vehicle) =>
            convertToVehicle(vehicle as vehicles_vehicles_nodes)
          ) ?? []
        }
      />
      <BookCar />
      <Footer />
    </Box>
  );
}
