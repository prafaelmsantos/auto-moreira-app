import { Grid, Typography } from "@mui/material";
import { ContactIcon } from "../../../models/enums/ContactIconEnum";
import { grey } from "@mui/material/colors";
import ContactIconInfo from "./ContactInfoIcon";

export default function ContactInfo() {
  return (
    <>
      <Grid container>
        <Typography fontWeight={"bold"} fontSize={40} variant="h2">
          Precisa de informações adicionais?
        </Typography>
        <Typography fontSize={16} color={grey[700]} mt={3}>
          O Auto Moreira conta com mais de 15 anos de experiência no mercado de
          venda automóvel e tem como principal missão, garantir a melhor
          Qualidade e Confiança nos seus negócios.
        </Typography>
      </Grid>

      <Grid container mt={5}>
        <ContactIconInfo type={ContactIcon.PHONE} text={"+351 231472555"} />
        <ContactIconInfo
          type={ContactIcon.EMAIL}
          text={"automoreira@gmail.com"}
        />
        <ContactIconInfo
          type={ContactIcon.LOCATION}
          text={"Praia de Mira, Coimbra, Portugal"}
        />
      </Grid>
    </>
  );
}
