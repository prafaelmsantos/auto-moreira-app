/** @format */

import {Grid} from "@mui/material";
import {VehicleCardIcon} from "../../../../models/enums/VehicleCardIconEnum";
import VehicleCardItem from "./VehicleCardItem";

type IVehicleCardItemRow = {
  text1: string | number;
  text2: string | number;
  title1: string;
  title2: string;
  iconType1: VehicleCardIcon;
  iconType2: VehicleCardIcon;
  first?: boolean;
};

export default function VehicleCardItemRow(props: IVehicleCardItemRow) {
  const {
    title1,
    title2,
    iconType1,
    iconType2,
    text1,
    text2,
    first = false,
  } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={1}
      mt={!first ? 1 : 0}
    >
      <Grid item>
        <VehicleCardItem text={text1} title={title1} iconType={iconType1} />
      </Grid>
      <Grid item>
        <VehicleCardItem text={text2} title={title2} iconType={iconType2} />
      </Grid>
    </Grid>
  );
}
