import { Box, Grid } from "@mui/material";
import { Vehicle } from "../../../models/Vehicle";
import VehicleCardInfo from "./VehicleCardInfo";

type IVehicleCard = {
  vehicles: Vehicle[];
};

function VehicleCard(props: IVehicleCard) {
  const { vehicles } = props;

  return (
    <Box>
      <Grid container direction="row" spacing={2} sx={{ p: 15 }}>
        <Grid item xs={6}>
          {vehicles.map((vehicle, key) => (
            <VehicleCardInfo key={key} vehicle={vehicle} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default VehicleCard;
