/** @format */

import {Box} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BASE_API_URL} from "../../../config/variables";
import {IVehicle} from "../../../models/Vehicle";
import {getData} from "../../../services/AutoMoreiraService";
import VehicleDetails from "./VehicleDetails";
import {useAppDispatch} from "../../../redux/hooks";
import {setLoader, setToInitialLoader} from "../../../redux/loaderSlice";
import BannerHero from "../../shared/banner/BannerHero";
import {NavLinkType} from "../../../models/enums/NavLinkType";
import {Fuel} from "../../../models/enums/FuelEnum";
import {defaultFilters} from "../../../models/Filter";

export default function VehiclePage() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [vehicle, setVehicle] = useState<IVehicle>();

  const vehicleId = Number(param.id);

  useEffect(() => {
    if (vehicleId) {
      dispatch(setLoader(true));
      getData<IVehicle>(`${BASE_API_URL}${"api/vehicles/"}${Number(param.id)}`)
        .then((data) => {
          setVehicle(data);
          dispatch(setToInitialLoader());
        })
        .catch((e) => {
          console.error(e);
          navigate("/vehicles");
          dispatch(setToInitialLoader());
        });
    } else {
      navigate("/vehicles");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicleId]);

  const markIdParam = !isNaN(Number(param.markId))
    ? Number(param.markId)
    : null;
  const modelIdParam = !isNaN(Number(param.modelId))
    ? Number(param.modelId)
    : null;
  const fuelTypeParam = Object.values(Fuel).includes(param.fuelType as Fuel)
    ? (param.fuelType as Fuel)
    : null;

  const minYearParam = !isNaN(Number(param.minYear))
    ? Number(param.minYear)
    : defaultFilters.minYear;
  const maxYearParam = !isNaN(Number(param.maxYear))
    ? Number(param.maxYear)
    : defaultFilters.maxYear;
  const minPriceParam = !isNaN(Number(param.minPrice))
    ? Number(param.minPrice)
    : defaultFilters.minPrice;
  const maxPriceParam = !isNaN(Number(param.maxPrice))
    ? Number(param.maxPrice)
    : defaultFilters.maxPrice;
  const minKmsParam = !isNaN(Number(param.minKms))
    ? Number(param.minKms)
    : defaultFilters.minKms;
  const maxKmsParam = !isNaN(Number(param.maxKms))
    ? Number(param.maxKms)
    : defaultFilters.maxKms;
  const pageParam = !isNaN(Number(param.page)) ? Number(param.page) : 1;

  return (
    <Box>
      <BannerHero
        url={`/vehicles/${markIdParam}/${modelIdParam}/${fuelTypeParam}/${minYearParam}/${maxYearParam}/${minPriceParam}/${maxPriceParam}/${minKmsParam}/${maxKmsParam}/${pageParam}`}
        type={NavLinkType.VEHICLES}
        page={
          vehicle &&
          vehicle.model.mark.name +
            " " +
            vehicle.model.name +
            " " +
            (vehicle.version ?? "")
        }
      />

      {vehicle && <VehicleDetails vehicle={vehicle} />}
    </Box>
  );
}
