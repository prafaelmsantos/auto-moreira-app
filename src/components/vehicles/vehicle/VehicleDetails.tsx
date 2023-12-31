/** @format */

import {Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import {IVehicle} from "../../../models/Vehicle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {VehicleCardIcon} from "../../../models/enums/VehicleCardIconEnum";

import {FuelTypeConverted} from "../../../models/enums/FuelEnum";
import {TransmissionConverted} from "../../../models/enums/TransmissionEnum";
import VehicleCardItemRow from "./utils/VehicleCardItemRow";

export default function VehicleDetails(props: {vehicle: IVehicle}) {
  const {vehicle} = props;
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

  const InputLabelStyle = {
    style: {
      fontSize: 18,
    },
  };
  return (
    <Grid container direction="row" spacing={10} sx={{p: 5}}>
      <Grid item xs={12} lg={7}>
        <ImageGallery showNav items={items} />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          mb={3}
          mt={2}
        >
          <Grid item>
            <Typography variant="h4">
              {vehicle.mark.name +
                " " +
                vehicle.model.name +
                " " +
                vehicle.version}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{vehicle.price + " €"}</Typography>
          </Grid>
        </Grid>
        <Card sx={{px: 8, py: 5}}>
          <CardContent>
            <VehicleCardItemRow
              text1={vehicle.year}
              text2={vehicle.mileage + " Kms"}
              title1={"Registo"}
              title2={"Quilometros"}
              iconType1={VehicleCardIcon.YEAR}
              iconType2={VehicleCardIcon.MILEAGE}
              first
            />
            <VehicleCardItemRow
              text1={vehicle.engineSize + " Cm3"}
              text2={vehicle.power + " CV"}
              title1={"Motor"}
              title2={"Potência"}
              iconType1={VehicleCardIcon.ENGINESIZE}
              iconType2={VehicleCardIcon.POWER}
            />
            <VehicleCardItemRow
              text1={TransmissionConverted(vehicle.transmission)}
              text2={FuelTypeConverted(vehicle.fuelType)}
              title1={"Transmissão"}
              title2={"Combustível"}
              iconType1={VehicleCardIcon.TRANSMISSION}
              iconType2={VehicleCardIcon.FUELTYPE}
            />
            <VehicleCardItemRow
              text1={vehicle.doors}
              text2={vehicle.color}
              title1={"Portas"}
              title2={"Cor"}
              iconType1={VehicleCardIcon.DOORS}
              iconType2={VehicleCardIcon.COLOR}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Observações"
          multiline
          rows={4}
          value={vehicle.observations}
          InputProps={InputLabelStyle}
          InputLabelProps={InputLabelStyle}
        />
      </Grid>
    </Grid>
  );
}
