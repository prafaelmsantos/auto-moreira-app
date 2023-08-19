import { Box, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";

export default function AdminUser() {
  return (
    <Box>
      <HeroPages id={LinkType.ADMIN_USER} />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Box>USER</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
