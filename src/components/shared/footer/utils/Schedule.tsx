import { Grid, Typography } from "@mui/material";

export default function Schedule() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" fontFamily={"Rubik"}>
            Horário
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Typography sx={{ fontSize: 18 }} fontFamily={"Rubik"}>
            Seg. a Sex.: 9:00 - 18:00
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 18 }} fontFamily={"Rubik"}>
            Sábado: 9:30 - 18:00
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 18 }} fontFamily={"Rubik"}>
            Domingo: 9:30 - 15:00
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
