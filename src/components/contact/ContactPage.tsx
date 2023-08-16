import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ContactForm from "./form/ContactForm";
import ContactInfo from "./info/ContactInfo";

export default function ContactPage() {
  return (
    <Box>
      <Grid
        className="contact-div"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={20}
        sx={{ px: 20 }}
      >
        <Grid container item xs={5} direction="row" sx={{ mb: 18 }}>
          <ContactInfo />
        </Grid>
        <Grid container item xs={6} direction="row">
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
