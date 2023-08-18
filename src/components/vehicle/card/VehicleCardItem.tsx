import { Grid, Typography } from "@mui/material";
import { AiFillCar, AiFillTool } from "react-icons/ai";
import { VehicleCardIcon } from "../../../models/enums/VehicleCardIconEnum";
import { BsFuelPump, BsSpeedometer2 } from "react-icons/bs";
import { GiCarDoor, GiPowerLightning, GiRoad } from "react-icons/gi";
import { grey } from "@mui/material/colors";
import { VscCalendar } from "react-icons/vsc";
import { LuPaintbrush } from "react-icons/lu";

type IVehicleCardItem = {
  title?: string;
  text: string | number;
  iconType: VehicleCardIcon;
  reverse?: boolean;
};

export default function VehicleCardItem(props: IVehicleCardItem) {
  const { text, iconType, title, reverse = false } = props;

  return (
    <Grid container direction="row" spacing={title ? 2 : 1}>
      {!reverse ? (
        <>
          <Grid item mt={title ? 1 : 0}>
            <Typography fontSize={20}>
              {iconType === VehicleCardIcon.MARK && <AiFillCar />}
              {iconType === VehicleCardIcon.DOORS && <GiCarDoor />}
              {iconType === VehicleCardIcon.TRANSMISSION && <AiFillTool />}
              {iconType === VehicleCardIcon.FUELTYPE && <BsFuelPump />}
              {iconType === VehicleCardIcon.YEAR && <VscCalendar />}
              {iconType === VehicleCardIcon.MILEAGE && <GiRoad />}
              {iconType === VehicleCardIcon.ENGINESIZE && <BsSpeedometer2 />}
              {iconType === VehicleCardIcon.POWER && <GiPowerLightning />}
              {iconType === VehicleCardIcon.COLOR && <LuPaintbrush />}
            </Typography>
          </Grid>
          <Grid item sx={{ minWidth: 120 }}>
            {title && (
              <Typography color={grey[700]} fontSize={14}>
                {title}
              </Typography>
            )}
            <Typography color={!title ? grey[700] : "black"} fontSize={18}>
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
              {iconType === VehicleCardIcon.FUELTYPE && <BsFuelPump />}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}
