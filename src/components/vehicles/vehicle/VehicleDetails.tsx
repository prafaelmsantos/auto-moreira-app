/** @format */

import {
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  ConvertToReactImageGalleryItem,
  defaultImage,
  IVehicle,
} from "../../../models/Vehicle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {VehicleCardIcon} from "../../../models/enums/VehicleCardIconEnum";
import {FuelTypeConverted} from "../../../models/enums/FuelEnum";
import {TransmissionConverted} from "../../../models/enums/TransmissionEnum";
import VehicleCardItemRow from "./utils/VehicleCardItemRow";
import {CurrencyFormatter} from "../../../utils/CurrencyFormatter";
import soldImage from "../../../images/soldImage.png";
import AutoMoreiraButton from "../../shared/AutoMoreiraButton";
import AutoMoreiraInfoModal from "../../shared/AutoMoreiraInfoModal";
import {useState} from "react";

export default function VehicleDetails(props: {vehicle: IVehicle}) {
  const {vehicle} = props;

  const images =
    vehicle.vehicleImages.length !== 0
      ? vehicle.vehicleImages.map((x) => ConvertToReactImageGalleryItem(x))
      : defaultImage;

  const InputLabelStyle = {
    style: {
      fontSize: 18,
    },
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const initialMessage = `Pretendo saber mais informações sobre o veículo ${
    vehicle.model.mark.name +
    " " +
    vehicle.model.name +
    " " +
    (vehicle.version ?? " ")
  } de ${vehicle.year}.`;

  return (
    <>
      <AutoMoreiraInfoModal {...{initialMessage, open, handleClose}} />

      <Grid container direction="row" spacing={10} sx={{p: 5}}>
        <Grid item xs={12} lg={7}>
          <ImageGallery showNav items={images} />
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
                {vehicle.model.mark.name +
                  " " +
                  vehicle.model.name +
                  " " +
                  (vehicle.version ?? " ")}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                {CurrencyFormatter.format(vehicle.price)}
              </Typography>
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
              {vehicle.sold && (
                <Container
                  sx={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    width: "250px",
                  }}
                >
                  <img src={soldImage} alt="vendido" />
                </Container>
              )}
            </CardContent>
          </Card>

          {!vehicle.sold && (
            <AutoMoreiraButton
              sx={{mt: 2}}
              onClick={handleClickOpen}
              text={"Pedir Informações"}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            disabled
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
    </>
  );
}
