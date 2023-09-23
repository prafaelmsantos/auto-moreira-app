import { Grid, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import { navLink } from "../../../../data/link";

export default function SiteMap() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontFamily={"Rubik"} variant="h4">
            Mapa do Site
          </Typography>
        </Grid>
        {navLink
          .filter((x) => x.showNavLink)
          .map((data, i) => (
            <Grid item xs={12} sx={{ mt: i === 0 ? 1 : 0 }}>
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={data.url}
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "#ff4d30",
                      fontWeight: "bold",
                      fontSize: 20,
                      textDecoration: "none",
                    };
                  } else {
                    return {
                      fontSize: 18,
                      color: "black",
                      textDecoration: "none",
                      "&hover": {
                        color: "#ff4d30",
                      },
                    };
                  }
                }}
              >
                {data.title}
              </NavLink>
            </Grid>
          ))}
        <Grid item xs={12}>
          <Typography
            color={"black"}
            sx={{ fontSize: 20, textDecoration: "none" }}
            fontFamily={"Rubik"}
          ></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
