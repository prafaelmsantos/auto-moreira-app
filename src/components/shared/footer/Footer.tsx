import { Box, Divider, Grid, Typography } from "@mui/material";

import AutoMoreira from "./utils/AutoMoreira";
import SiteMap from "./utils/SiteMap";
import Schedule from "./utils/Schedule";
import DataProtection from "./utils/DataProtection";

export default function Footer() {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        spacing={2}
        className="container"
        justifyContent="space-between"
      >
        <AutoMoreira />

        <Grid item container xs={7}>
          <SiteMap />
          <Schedule />
          <DataProtection />
        </Grid>
        <Divider sx={{ mt: 1, mb: 1, color: "black" }} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={4}
          mb={4}
        >
          <Typography variant="h6" fontFamily={"Rubik"}>
            2023 @Copyright | Todos os Direitos Reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
