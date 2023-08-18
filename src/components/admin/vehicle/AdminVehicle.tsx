import { Box, Grid } from "@mui/material";
import HeroPages from "../../HeroPages";
import { LinkType } from "../../../data/link";
import AdminNavbar from "../../shared/navbar/admin/AdminNavbar";

export default function AdminVehicle() {
  return (
    <Box>
      <HeroPages id={LinkType.ADMIN} />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Box>AdminVehicle</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
