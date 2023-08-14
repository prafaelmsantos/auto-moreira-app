import { Grid, Typography } from "@mui/material";
import { AiFillCar, AiFillTool } from "react-icons/ai";
import { VehicleCardIcon } from "../../../models/enums/VehicleCardIconEnum";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { grey } from "@mui/material/colors";

type IVehicleCardItem = {
  text: string | number;
  iconType: VehicleCardIcon;
  reverse?: boolean;
};

function VehicleCardItem(props: IVehicleCardItem) {
  const { text, iconType, reverse = false } = props;

  return (
    <Grid container direction="row" spacing={1}>
      {!reverse ? (
        <>
          <Grid item>
            <Typography fontSize={20}>
              {iconType === VehicleCardIcon.MARK && <AiFillCar />}
              {iconType === VehicleCardIcon.DOORS && <GiCarDoor />}
              {iconType === VehicleCardIcon.TRANSMISSION && <AiFillTool />}
              {iconType === VehicleCardIcon.FUELTYPE && <BsFillFuelPumpFill />}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color={grey[700]} fontSize={18}>
              {text}
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <Typography color={grey[700]} fontSize={18}>
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={20}>
              {iconType === VehicleCardIcon.MARK && <AiFillCar />}
              {iconType === VehicleCardIcon.DOORS && <GiCarDoor />}
              {iconType === VehicleCardIcon.TRANSMISSION && <AiFillTool />}
              {iconType === VehicleCardIcon.FUELTYPE && <BsFillFuelPumpFill />}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default VehicleCardItem;
