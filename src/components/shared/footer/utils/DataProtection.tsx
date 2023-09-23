import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function DataProtection() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" fontFamily={"Rubik"}>
            Proteção&nbsp;de&nbsp;Dados
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/"}
            style={() => {
              return {
                fontSize: 18,
                color: "black",
                textDecoration: "none",
                "&hover": {
                  color: "#ff4d30",
                },
              };
            }}
          >
            Termos&nbsp;e&nbsp;Condições
          </NavLink>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/"}
            style={() => {
              return {
                fontSize: 18,
                color: "black",
                textDecoration: "none",
                "&hover": {
                  color: "#ff4d30",
                },
              };
            }}
          >
            Política&nbsp;de&nbsp;Cookies
          </NavLink>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <NavLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/"}
            style={() => {
              return {
                fontSize: 18,
                color: "black",
                textDecoration: "none",
                "&hover": {
                  color: "#ff4d30",
                },
              };
            }}
          >
            Política&nbsp;de&nbsp;Privacidade
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
