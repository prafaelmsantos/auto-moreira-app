import { Grid, Typography } from "@mui/material";

type IVehicleLenghtGrid = {
  length: number;
};

function VehicleLenghtGrid(props: IVehicleLenghtGrid) {
  const { length } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 7 }}
    >
      <Grid item>
        <Typography variant="h4">
          {length !== 0
            ? length === 1
              ? length + " veiculo encontrado!"
              : length + " veiculos encontrados!"
            : "Nenhum veiculo encontrado!"}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default VehicleLenghtGrid;
