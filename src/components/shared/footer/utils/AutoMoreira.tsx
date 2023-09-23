import { Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ContactIconInfo from "../../../contact/info/ContactInfoIcon";
import { ContactIcon } from "../../../../models/enums/ContactIconEnum";

export default function AutoMoreira() {
  return (
    <Grid item container xs={4} mx={1}>
      <Grid item xs={12}>
        <Typography variant="h3" fontFamily={"Rubik"}>
          Auto Moreira
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography
          color={"#706f7b"}
          sx={{ fontSize: 20 }}
          fontFamily={"Rubik"}
        >
          O Auto Moreira tem como principal missão, garantir a melhor Qualidade
          e Confiança nos seus negócios.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography
          color={"black"}
          sx={{ fontSize: 20, textDecoration: "none" }}
          fontFamily={"Rubik"}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <ContactIconInfo
              isFooter
              type={ContactIcon.PHONE}
              text={"+351 231472555"}
            />
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color={"black"}
          sx={{ fontSize: 20, textDecoration: "none" }}
          fontFamily={"Rubik"}
        >
          <ContactIconInfo
            isFooter
            type={ContactIcon.EMAIL}
            text={"automoreira@gmail.com"}
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
