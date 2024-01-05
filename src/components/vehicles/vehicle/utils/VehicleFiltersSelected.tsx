/** @format */

import {Grid, Typography} from "@mui/material";
import {ISelectedFilters} from "../../../../models/Filter";
import {IVehicle} from "../../../../models/Vehicle";

type IVehicleSelectedFilters = {
  selectedFinalFilters: ISelectedFilters;
  vehicles: IVehicle[];
};

function VehicleSelectedFilters({
  selectedFinalFilters,
  vehicles,
}: IVehicleSelectedFilters) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt: 7}}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        {selectedFinalFilters?.markId
          ? vehicles[0]
            ? vehicles[0].mark?.name + " - "
            : ""
          : ""}
        {selectedFinalFilters?.modelId
          ? vehicles[0]
            ? vehicles[0].model?.name + " - "
            : ""
          : ""}
        Veículos
      </Typography>
    </Grid>
  );
}

export default VehicleSelectedFilters;
