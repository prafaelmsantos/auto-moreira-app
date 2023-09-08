import { Grid } from "@mui/material";
import { IVehicle } from "../../../models/Vehicle";
import VehicleCardItem from "./VehicleCardItem";
import { VehicleCardIcon } from "../../../models/enums/VehicleCardIconEnum";
import { FuelTypeConverted } from "../../../models/enums/FuelEnum";

export default function VehicleCardRow(props: { vehicle: IVehicle }) {
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
            text={FuelTypeConverted(vehicle.fuelType)}
            iconType={VehicleCardIcon.FUELTYPE}
            reverse={true}
          />
        </Grid>
      </Grid>
    </>
  );
}
