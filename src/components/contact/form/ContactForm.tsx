import { Button, Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IContact } from "../../../models/Contact";
import ContactService from "../../../services/ContactService";
import { MessageType } from "../../../models/enums/MessageTypeEnum";
import { useEffect, useState } from "react";
import AlertModal from "../../shared/modal/AlertModal";
import AutoMoreiraSnackbar from "../../shared/snackbar/AutoMoreiraSnackbar";
import TextFieldValidation from "../../shared/form/TextFieldValidation";

function ContactForm() {
  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.INFO,
  });
  const { responseContent, responseTitle, openModal, type } = stateModal;

  const [stateToast, setStateToast] = useState({
    openToast: false,
    toastMessage: "",
  });

  const { openToast, toastMessage } = stateToast;

  const validationSchema = Yup.object().shape({
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
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (contact: IContact) => {
    if (contact) {
      const response = await ContactService.postContact(contact);
      if (response) {
        if (response.ok) {
          setStateToast({
            openToast: true,
            toastMessage: "Mensagem enviada com sucesso!",
          });
          window.scrollTo(0, 0);
          return Promise.resolve();
        } else {
          const messageError = response
            .json()
            .then((response) => response.message)
            .then((x) => x as string);

          setStateModal({
            openModal: true,
            responseTitle: "Erro do Servidor Interno",
            responseContent: (await messageError).toString(),
            type: MessageType.ERROR,
          });

          return Promise.reject();
        }
      }
    }
  }; // your form submit function which will invoke after successful validation

  useEffect(() => {
    reset({ name: "", email: "", phoneNumber: 100000000, message: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={() => setStateModal({ ...stateModal, openModal: false })}
        type={type}
      />
      <AutoMoreiraSnackbar
        type={MessageType.SUCCESS}
        message={toastMessage}
        open={openToast}
        onClose={() => setStateToast({ ...stateToast, openToast: false })}
      />
      <Grid container direction="row">
        <Grid item xs={12}>
          <TextFieldValidation
            label={"Nome Completo"}
            error={!!errors.name}
            helperText={errors.name?.message}
            register={register("name")}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextFieldValidation
            label={"Telefone/Telemóvel"}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            inputProps={{
              inputProps: { min: 100000000, max: 999999999 },
              startAdornment: (
                <Typography sx={{ mt: 0.1, mx: 0.5 }}>+351</Typography>
              ),
            }}
            type="Number"
            defaultValue={100000000}
            register={register("phoneNumber")}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextFieldValidation
            label={"Email"}
            error={!!errors.email}
            helperText={errors.email?.message}
            register={register("email")}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextFieldValidation
            label={"Mensagem"}
            error={!!errors.message}
            helperText={errors.message?.message}
            register={register("message")}
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
            onClick={handleSubmit(onSubmit)}
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
    </>
  );
}

export default ContactForm;
