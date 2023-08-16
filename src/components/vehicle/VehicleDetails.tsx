import { Box, Grid } from "@mui/material";
import { Vehicle } from "../../models/Vehicle";

export default function VehicleDetails(props: { vehicle: Vehicle }) {
  const { vehicle } = props;
  return (
    <Box>
      <Grid container direction="row" spacing={2} sx={{ p: 15 }}>
        DETAILS{vehicle.mark.name}
      </Grid>
    </Box>
  );
}
