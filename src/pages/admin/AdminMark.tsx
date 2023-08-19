import { Box, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";

export default function AdminMark() {
  return (
    <Box>
      <HeroPages id={LinkType.ADMIN_MARK} />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Box>AdminMark</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
