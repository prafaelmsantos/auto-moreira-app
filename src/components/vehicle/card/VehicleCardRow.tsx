import { Grid } from "@mui/material";
import { Vehicle } from "../../../models/Vehicle";
import VehicleCardItem from "./VehicleCardItem";
import { VehicleCardIcon } from "../../../models/enums/VehicleCardIconEnum";

type IVehicleCardRow = {
  vehicle: Vehicle;
};

export default function VehicleCardRow(props: IVehicleCardRow) {
  const { vehicle } = props;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        mt={0.5}
        px={1}
      >
        <Grid item>
          <VehicleCardItem
            text={vehicle.mark.name}
            iconType={VehicleCardIcon.MARK}
          />
        </Grid>
        <Grid item>
          <VehicleCardItem
            text={vehicle.doors}
            iconType={VehicleCardIcon.DOORS}
            reverse={true}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        mt={0.5}
        px={1}
      >
        <Grid item>
          <VehicleCardItem
            text={vehicle.transmission}
            iconType={VehicleCardIcon.TRANSMISSION}
          />
        </Grid>
        <Grid item>
          <VehicleCardItem
            text={vehicle.fuelType}
            iconType={VehicleCardIcon.FUELTYPE}
            reverse={true}
          />
        </Grid>
      </Grid>
    </>
  );
}
