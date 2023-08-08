import CarImg1 from "../../../images/cars-big/audi-box.png";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Vehicle } from "../../../models/Vehicle";
import VehicleCardRow from "./VehicleCardRow";
import VehicleCardTitle from "./VehicleCardTitle";

type IVehicleCardInfo = {
  vehicle: Vehicle;
};

function VehicleCardInfo(props: IVehicleCardInfo) {
  const { vehicle } = props;

  return (
    <Card sx={{ maxWidth: 345, py: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={CarImg1}
      />
      <CardContent>
        <Grid container sx={{ px: 1 }}>
          <VehicleCardTitle
            title={vehicle.mark.name + " " + vehicle.model.name}
            price={vehicle.price}
          />

          <Grid container sx={{ mt: 0.5 }}>
            <Grid item>
              <AiFillStar color={"#fbc02d"} size={18} />
              <AiFillStar color={"#fbc02d"} size={18} />
              <AiFillStar color={"#fbc02d"} size={18} />
              <AiFillStar color={"#fbc02d"} size={18} />
              <AiFillStar color={"#fbc02d"} size={18} />
            </Grid>
          </Grid>
          <VehicleCardRow vehicle={vehicle} />
        </Grid>
      </CardContent>

      <Box sx={{ px: 4 }}>
        <Divider />
      </Box>

      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1.5, px: 3 }}
        >
          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ bgcolor: "#ff4d30", py: 2 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography color={"white"} fontWeight={"bold"} fontSize={16}>
                Book Ride
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default VehicleCardInfo;
