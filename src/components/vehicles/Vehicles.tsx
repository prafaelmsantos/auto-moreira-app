/** @format */

import {AiFillCar, AiFillTool} from "react-icons/ai";
import {GiCarDoor} from "react-icons/gi";
import {BsFillFuelPumpFill} from "react-icons/bs";
import {
  defaultFilters,
  FilterMode,
  ISelectedFilters,
  rowsPerPage,
} from "../../models/Filter";
import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Fuel, FuelTypeConverted} from "../../models/enums/FuelEnum";
import {VEHICLES} from "../../models/GraphQL/Vehicles";
import {convertToVehicle} from "../../models/Vehicle";
import {TransmissionConverted} from "../../models/enums/TransmissionEnum";
import {useAppDispatch} from "../../redux/hooks";
import {setLoader} from "../../redux/loaderSlice";
import {useNavigate, useParams} from "react-router-dom";
import VehicleLenghtGrid from "./vehicle/utils/VehicleLenghtGrid";
import SearchVehicle from "../home/search-vehicle/SearchVehicle";
import VehicleSelectedFilters from "./vehicle/utils/VehicleFiltersSelected";
import {CurrencyFormatter} from "../../utils/CurrencyFormatter";
import {
  vehicles,
  vehicles_vehicles_nodes,
} from "../../models/GraphQL/types/vehicles";
import defaultVehicle from "../../images/defaultVehicle.jpg";
import soldImage from "../../images/soldImage.png";
import {Container, Pagination} from "@mui/material";

function Vehicles() {
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] =
    useState<ISelectedFilters>(defaultFilters);

  const [selectedFinalFilters, setSelectedFinalFilters] =
    useState<ISelectedFilters>(defaultFilters);

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
    gte: selectedFinalFilters.minYear,
    lte: selectedFinalFilters.maxYear,
  };

  const price = {
    gte: selectedFinalFilters.minPrice,
    lte: selectedFinalFilters.maxPrice,
  };

  const kms = {
    gte: selectedFinalFilters.minKms,
    lte: selectedFinalFilters.maxKms,
  };

  const {data, loading} = useQuery<vehicles>(VEHICLES, {
    variables: {
      order: {id: "ASC"},
      first: 500,
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
    data?.vehicles?.nodes
      ?.map((vehicle) => convertToVehicle(vehicle as vehicles_vehicles_nodes))
      ?.slice((page - 1) * rowsPerPage, page * rowsPerPage) ?? [];

  const handleChange = (event: number | string | null | number[], id: string) =>
    setSelectedFilters((old) => ({...old, [id]: event}));

  const handleClear = () => {
    setSelectedFilters(defaultFilters);
    setSelectedFinalFilters(defaultFilters);
  };

  const param = useParams();

  const pageParam = !isNaN(Number(param.page)) ? Number(param.page) : 1;

  const handleSubmit = () => {
    setPage(pageParam);
    setSelectedFinalFilters(selectedFilters);
  };

  useEffect(() => {
    setTotalCount(data?.vehicles?.totalCount ?? 0);
  }, [data?.vehicles?.totalCount]);

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

      <VehicleLenghtGrid length={totalCount} />

      <div className="py-8 px-8 lg:px-48 lg:py-16 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 d-flex justify-content-center">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border border-lighter-grey bg-white rounded"
            >
              <div>
                {vehicle.sold && (
                  <Container
                    sx={{
                      backgroundColor: "transparent",
                      position: "absolute",
                      width: "150px",
                    }}
                  >
                    <img src={soldImage} alt="vendido" />
                  </Container>
                )}

                <img
                  src={
                    vehicle.vehicleImages.length !== 0
                      ? vehicle.vehicleImages.find((x) => x.isMain)?.url ??
                        defaultVehicle
                      : defaultVehicle
                  }
                  alt={`${vehicle.model.mark.name} ${vehicle.model.name}`}
                  width={600}
                  height={600}
                  className="w-full h-full lg:h-50 rounded-t"
                />
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div>
                      <h1 className="font-bold text-md lg:text-md">
                        {`${vehicle.model.mark.name} ${vehicle.model.name}`}
                      </h1>
                    </div>
                  </div>
                  <div className="text-right">
                    <h1 className="font-bold text-xl lg:text-sm">
                      {CurrencyFormatter.format(vehicle.price)}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
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
                <div className="flex items-center justify-between text-sm">
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
                      navigate(
                        `/vehicles/${selectedFilters.markId}/${selectedFilters.modelId}/${selectedFilters.fuelType}/${selectedFilters.minYear}/${selectedFilters.maxYear}/${selectedFilters.minPrice}/${selectedFilters.maxPrice}/${selectedFilters.minKms}/${selectedFilters.maxKms}/${page}/${vehicle.id}`
                      );
                    }}
                    className="block text-center bg-custom-orange p-2 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear w-full"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalCount > 0 && (
          <Pagination
            count={Math.ceil(totalCount / rowsPerPage)}
            page={page}
            onChange={(_, page) => setPage(page)}
            color="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "60px 0 0",
            }}
          />
        )}
      </div>
    </section>
  );
}

export default Vehicles;
