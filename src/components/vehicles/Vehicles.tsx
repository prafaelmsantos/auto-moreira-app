/** @format */

import {AiFillCar, AiFillStar, AiFillTool} from "react-icons/ai";
import {GiCarDoor} from "react-icons/gi";
import {BsFillFuelPumpFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {
  defaultFilters,
  FilterMode,
  ISelectedFilters,
} from "../../models/Filter";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Fuel, FuelTypeConverted} from "../../models/enums/FuelEnum";
import {vehicles, vehicles_vehicles_nodes} from "../../queries/types/vehicles";
import {VEHICLES} from "../../queries/Vehicles";
import {convertToVehicle} from "../../models/Vehicle";
import {TransmissionConverted} from "../../models/enums/TransmissionEnum";
import {useAppDispatch} from "../../redux/hooks";
import {setLoader} from "../../redux/loaderSlice";
import {useNavigate} from "react-router-dom";
import VehicleLenghtGrid from "./vehicle/utils/VehicleLenghtGrid";
import SearchVehicle from "../home/search-vehicle/SearchVehicle";
import {setCurrentFilters} from "../../config/localStorage";
import VehicleSelectedFilters from "./vehicle/utils/VehicleFiltersSelected";
import {CurrencyFormatter} from "../../utils/CurrencyFormatter";

function Vehicles() {
  const navigate = useNavigate();
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
        model: {markId: markId},
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoader(loading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const vehicles =
    data?.vehicles?.nodes?.map((vehicle) =>
      convertToVehicle(vehicle as vehicles_vehicles_nodes)
    ) ?? [];

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

  return (
    <section id="models-main">
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
      <VehicleSelectedFilters {...{selectedFinalFilters, vehicles}} />

      <VehicleLenghtGrid length={vehicles.length} />

      <div className="py-8 px-8 lg:px-48 lg:py-16 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 d-flex justify-content-center">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border border-lighter-grey bg-white rounded"
            >
              <div>
                <img
                  src={require(`../../images/box-Audi A1.png`)}
                  alt={"box-Audi A1"}
                  width={800}
                  height={800}
                  className="w-full h-full lg:h-60 object-cover rounded-t"
                />
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div>
                      <h1 className="font-bold text-xl lg:text-xl">
                        {vehicle.model.mark.name + " " + vehicle.model.name}
                      </h1>
                    </div>
                    <div className="text-[#ffc933] flex items-center">
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                      <span>
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <h1 className="font-bold text-xl lg:text-2xl">
                      {CurrencyFormatter.format(vehicle.price)}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <AiFillCar />
                    </span>
                    <span>{vehicle.model.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{vehicle.doors}</span>
                    <span>
                      <GiCarDoor />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <span>
                      <AiFillTool />
                    </span>
                    <span>{TransmissionConverted(vehicle.transmission)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{FuelTypeConverted(vehicle.fuelType)}</span>
                    <span>
                      <BsFillFuelPumpFill />
                    </span>
                  </div>
                </div>
                <div>
                  <hr className="border border-lighter-grey" />
                </div>
                <div>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/vehicles/${vehicle.id}`);
                    }}
                    className="block text-center bg-custom-orange p-3 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear w-full"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
