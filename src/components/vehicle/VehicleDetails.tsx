import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Vehicle } from "../../models/Vehicle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import VehicleCardItem from "./card/VehicleCardItem";
import { VehicleCardIcon } from "../../models/enums/VehicleCardIconEnum";
import { AiFillCar } from "react-icons/ai";

export default function VehicleDetails(props: { vehicle: Vehicle }) {
  const { vehicle } = props;
  const items = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Grid container direction="row" spacing={10} sx={{ p: 15 }}>
      <Grid item xs={7}>
        https://www.linxtion.com/demo/react-image-gallery/
        <ImageGallery showNav items={items} />
      </Grid>
      <Grid item xs={5}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h2" fontFamily={"Rubik"}>
              {vehicle.mark.name +
                " " +
                vehicle.model.name +
                " " +
                vehicle.version}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" fontFamily={"Rubik"}>
              {vehicle.price + " €"}
            </Typography>
          </Grid>
        </Grid>

        <Card sx={{ mt: 4, p: 3 }}>
          <CardContent>
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
                <Grid item>
                  <Typography fontSize={18}>{vehicle.mark.name}</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing={1}>
                    <Typography fontSize={20}>{<AiFillCar />}</Typography>{" "}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
