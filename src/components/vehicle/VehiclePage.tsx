import { Box } from "@mui/material";
import HeroPages from "../HeroPages";
import { LinkType } from "../../data/link";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../config/variables";
import { IVehicle } from "../../models/Vehicle";
import { getData } from "../../services/AutoMoreiraService";
import AutoMoreiraLoader from "../shared/loader/AutoMoreiraLoader";
import VehicleDetails from "./VehicleDetails";
import Footer from "../shared/footer/Footer";
import BookCar from "./book-car/BookCar";

export default function VehiclePage() {
  const param = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    if (Number(param.id)) {
      setIsLoading(true);
      const endpoint = `${BASE_API_URL}${"api/vehicles/"}${Number(param.id)}`;
      getData<IVehicle>(`${endpoint}`)
        .then((data) => {
          setVehicle(data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setIsLoading(false);
          navigate("/vehicles");
        });
    } else {
      navigate("/vehicles");
    }
  }, [param]);

  return (
    <Box>
      <AutoMoreiraLoader open={isLoading} />
      <HeroPages
        id={LinkType.VEHICLES}
        title={
          vehicle &&
          vehicle.mark.name + " " + vehicle.model.name + " " + vehicle.version
        }
      />
      {vehicle && <VehicleDetails vehicle={vehicle} />}

      <BookCar />
      <Footer />
    </Box>
  );
}
