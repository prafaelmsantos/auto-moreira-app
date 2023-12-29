/** @format */

import {Grid, Typography} from "@mui/material";

type IVehicleLenghtGrid = {
  length: number;
};

function VehicleLenghtGrid(props: IVehicleLenghtGrid) {
  const {length} = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt: 7}}
    >
      <Typography variant="h6">
        {length !== 0
          ? length === 1
            ? length + " veiculo encontrado!"
            : length + " veiculos encontrados!"
          : "Não foram encontrados resultados para a sua pesquisa."}
      </Typography>
    </Grid>
  );
}

export default VehicleLenghtGrid;
