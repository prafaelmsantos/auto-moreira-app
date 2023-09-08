import { Box, Grid } from "@mui/material";
import { IVehicle } from "../../../models/Vehicle";
import VehicleCardInfo from "./VehicleCardInfo";

type IVehicleCard = {
  vehicles: IVehicle[];
};

export default function VehicleCard(props: IVehicleCard) {
  const { vehicles } = props;

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{ px: 15, mt: 4 }}
      >
        {vehicles.map((vehicle, key) => (
          <Grid item>
            <VehicleCardInfo key={key} vehicle={vehicle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
