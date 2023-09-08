import { Box, Container, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";
import Footer from "../../components/shared/footer/Footer";

export default function AdminHome() {
  return (
    <Box>
      <HeroPages id={LinkType.ADMIN} title="Início" />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Container>
            <Box>HOME</Box>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
