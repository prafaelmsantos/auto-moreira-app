import { Button, Grid, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IContact } from "../../../models/Contact";

function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O nome completo obrigatório!"),
    email: Yup.string()
      .required("O email é obrigatório!")
      .email("O email é inválido!"),
    phoneNumber: Yup.number()
      .required("O numero de telemóvel/telefone é obrigatório!")
      .min(200000000, "O numero não é válido!")
      .max(999999999, "O numero não é válido!")
      .typeError("O numero não é válido!"),
    message: Yup.string().required("A menssagem obrigatória!"),
    dateTime: Yup.date().default(new Date()),
    id: Yup.number().default(0),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IContact) => {
    console.log(data);

    if (data) {
      console.log("top");
    }
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(errors);

  return (
    <Grid container direction="row">
      <Grid item xs={12} sm={12}></Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="name"
          label="Nome Completo"
          required
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          required
          id="fullname"
          label="Telefone/Telemóvel"
          fullWidth
          margin="dense"
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          InputProps={{
            inputProps: { min: 100000000, max: 999999999 },
            startAdornment: (
              <Typography sx={{ mt: 0.1, mx: 0.5 }}>+351</Typography>
            ),
          }}
          type="Number"
          defaultValue={100000000}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          required
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          id="message"
          label="Mensagem"
          required
          multiline
          rows={8}
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
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
