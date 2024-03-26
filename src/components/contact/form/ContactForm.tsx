/** @format */

import {Button, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {IContact} from "../../../models/Contact";
import ContactService from "../../../services/ContactService";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import TextFieldValidation from "../../shared/TextFieldValidation";
import {useAppDispatch} from "../../../redux/hooks";
import {setModal} from "../../../redux/modalSlice";
import {setSnackBar} from "../../../redux/snackBarSlice";

function ContactForm() {
  const dispatch = useAppDispatch();

  const validationSchema: Yup.ObjectSchema<IContact> = Yup.object().shape({
    name: Yup.string().required("O nome completo é obrigatório!"),
    email: Yup.string()
      .required("O email é obrigatório!")
      .email("O email é inválido!"),
    phoneNumber: Yup.number()
      .required("O numero de telemóvel/telefone é obrigatório!")
      .min(200000000, "O numero não é válido!")
      .max(999999999, "O numero não é válido!")
      .typeError("O numero não é válido!"),
    message: Yup.string().required("A mensagem é obrigatória!"),
    dateTime: Yup.date().default(new Date()),
    id: Yup.number().default(0),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IContact>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (contact: IContact) => {
    if (contact) {
      const response = await ContactService.postContact(contact);
      if (response) {
        if (response.ok) {
          dispatch(
            setSnackBar({
              open: true,
              message: "Mensagem enviada com sucesso!",
              type: MessageType.SUCCESS,
            })
          );

          window.scrollTo(0, 0);
          isSubmitSuccessful &&
            reset({
              name: "",
              email: "",
              phoneNumber: 100000000,
              message: "",
            });
          return Promise.resolve();
        } else {
          const messageError = response
            .json()
            .then((response) => response.message)
            .then((x) => x as string);
          dispatch(
            setModal({
              title: "Erro do Servidor Interno",
              message: (await messageError).toString(),
              type: MessageType.ERROR,
              open: true,
            })
          );
          return Promise.reject();
        }
      }
    }
  }; // your form submit function which will invoke after successful validation

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextFieldValidation
          label={"Nome Completo"}
          error={!!errors.name}
          helperText={errors.name?.message}
          register={register("name")}
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 2}}>
        <TextFieldValidation
          label={"Telefone/Telemóvel"}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          type="Number"
          defaultValue={0}
          register={register("phoneNumber")}
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 2}}>
        <TextFieldValidation
          label={"Email"}
          error={!!errors.email}
          helperText={errors.email?.message}
          register={register("email")}
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 2}}>
        <TextFieldValidation
          label={"Mensagem"}
          error={!!errors.message}
          helperText={errors.message?.message}
          register={register("message")}
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 3}}>
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
          onClick={handleSubmit(onSubmit)}
        >
          <Typography
            color={"white"}
            fontWeight={"bold"}
            fontSize={16}
            sx={{mt: 0.5}}
          >
            Enviar mensagem
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
