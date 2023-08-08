import { Grid, Typography } from "@mui/material";

type IVehicleCardTitle = {
  price: number;
  title: string;
};

function VehicleCardTitle(props: IVehicleCardTitle) {
  const { price, title } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography fontWeight={"bold"} fontSize={25}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontWeight={"bold"} fontSize={25}>
          {"€ " + price}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default VehicleCardTitle;
