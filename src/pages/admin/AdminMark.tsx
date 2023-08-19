import { Box, Container, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType, navLink } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";

export default function AdminMark() {
  return (
    <Box>
      <HeroPages
        id={LinkType.ADMIN_MARK}
        title={navLink.find((x) => x.id === LinkType.ADMIN_MARK)?.subTitle}
        titleUrl={navLink.find((x) => x.id === LinkType.ADMIN)?.url}
      />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Container>
            <Box>AdminMark</Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
