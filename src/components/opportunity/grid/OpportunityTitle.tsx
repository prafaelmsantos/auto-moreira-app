import { Grid, Typography } from "@mui/material";

export default function OpportunityTitle() {
  return (
    <>
      <Grid container justifyContent="center">
        <Typography fontWeight={"bold"} fontFamily={"Rubik"} fontSize={40}>
          Oportunidades de veículos
        </Typography>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Typography color={"#706f7b"} fontFamily={"Rubik"} fontSize={16}>
          Os veículos selecionados criteriosamente, para si.
        </Typography>
      </Grid>
    </>
  );
}
