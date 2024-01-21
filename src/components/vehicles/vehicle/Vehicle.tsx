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
import BannerHero from "../../shared/BannerHero";
import {NavLinkType} from "../../../models/enums/NavLinkType";

export default function VehiclePage() {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [vehicle, setVehicle] = useState<IVehicle>();

  const vehicleId = Number(param.id);

  useEffect(() => {
    if (vehicleId) {
      dispatch(setLoader(true));
      const endpoint = `${BASE_API_URL}${"api/vehicles/"}${Number(param.id)}`;
      getData<IVehicle>(`${endpoint}`)
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

  return (
    <Box>
      <BannerHero
        type={NavLinkType.VEHICLES}
        page={
          vehicle &&
          vehicle.model.mark.name +
            " " +
            vehicle.model.name +
            " " +
            vehicle.version
        }
      />

      {vehicle && <VehicleDetails vehicle={vehicle} />}
    </Box>
  );
}
