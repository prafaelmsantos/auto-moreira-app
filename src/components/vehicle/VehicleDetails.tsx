import { Box, Grid } from "@mui/material";
import HeroPages from "../HeroPages";
import { LinkType } from "../../data/link";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../config/variables";
import { Vehicle } from "../../models/Vehicle";
import { getData } from "../../services/AutoMoreiraService";
import AutoMoreiraLoader from "../AutoMoreiraLoader";

export default function VehicleDetails() {
  const param = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicle>();

  useEffect(() => {
    if (Number(param.id)) {
      setIsLoading(true);
      const endpoint = `${BASE_API_URL}${"api/vehicles/"}${Number(param.id)}`;
      getData<Vehicle>(`${endpoint}`)
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
  }, [navigate, param]);

  return (
    <Box>
      <AutoMoreiraLoader open={isLoading} />
      <HeroPages id={LinkType.VEHICLES} />
      <Grid container direction="row" spacing={2} sx={{ p: 15 }}>
        DETAILS{vehicle?.mark.name}
      </Grid>
    </Box>
  );
}
