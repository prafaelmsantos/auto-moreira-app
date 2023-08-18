import { Button, Grid, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

function ContactForm() {
  const InputLabelStyle = {
    style: {
      fontSize: 16,
    },
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="Nome Completo"
          label="Nome Completo"
          required
          InputProps={InputLabelStyle}
          InputLabelProps={InputLabelStyle}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          id="Email"
          label="Email"
          required
          InputProps={InputLabelStyle}
          InputLabelProps={InputLabelStyle}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          id="Mensagem"
          label="Mensagem"
          required
          multiline
          rows={8}
          InputProps={InputLabelStyle}
          InputLabelProps={{
            style: {
              fontSize: 16,
            },
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#ff4d30",
            py: 2,
            "&:hover": {
              backgroundColor: deepOrange[900],
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <ForwardToInboxIcon
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
              mx: 1,
            }}
          />
          <Typography
            color={"white"}
            fontWeight={"bold"}
            fontSize={16}
            fontFamily={"Rubik"}
            sx={{ mt: 0.5 }}
          >
            Enviar mensagem
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
