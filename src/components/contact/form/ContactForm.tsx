/** @format */

import {Button, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {IClientMessage} from "../../../models/ClientMessage";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import TextFieldValidation from "../../shared/textfield/TextFieldValidation";
import {useAppDispatch} from "../../../redux/hooks";
import {setModal} from "../../../redux/modalSlice";
import {setSnackBar} from "../../../redux/snackBarSlice";
import {
  ClientMessageSchema,
  IClientMessageSchema,
} from "../service/ClientMessageSchema";
import {createClientMessage} from "../service/ClientMessageService";
import {setLoader, setToInitialLoader} from "../../../redux/loaderSlice";

interface IContactForm {
  initialMessage?: string;
  handleClose?: () => void;
}
function ContactForm(props: IContactForm) {
  const {initialMessage, handleClose} = props;

  const dispatch = useAppDispatch();
  const methods = useForm<IClientMessageSchema>({
    resolver: async (data, context, options) =>
      await zodResolver(ClientMessageSchema)(data, context, options),
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const {
    handleSubmit,
    reset,
    formState: {errors},
  } = methods;

  const onSubmit = async (clientMessage: IClientMessage) => {
    dispatch(setLoader(true));
    createClientMessage(clientMessage)
      .then(() => {
        reset({
          name: "",
          email: "",
          phoneNumber: 0,
          message: "",
        });
        handleClose && handleClose();
        window.scrollTo(0, 0);
        dispatch(setToInitialLoader());
        dispatch(
          setSnackBar({
            open: true,
            message: "A sua mensagem enviada com sucesso!",
            type: MessageType.SUCCESS,
          })
        );
      })
      .catch((e) => {
        dispatch(setToInitialLoader());
        dispatch(
          setModal({
            title: "Erro Interno do Servidor",
            message: e.toString(),
            type: MessageType.ERROR,
            open: true,
          })
        );
      });
  };

  return (
    <FormProvider {...methods}>
      <Grid container direction="row">
        <Grid item xs={12}>
          <TextFieldValidation
            required
            label={"Nome"}
            helperText={errors.name?.message}
            name={"name"}
            error={!!errors.name}
            defaultValue={""}
            {...{errors}}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextFieldValidation
            required
            label={"Telefone/Telemóvel"}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            name={"phoneNumber"}
            type="Number"
            defaultValue={0}
            {...{errors}}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextFieldValidation
            required
            label={"Email"}
            error={!!errors.email}
            helperText={errors.email?.message}
            name={"email"}
            defaultValue={""}
            {...{errors}}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextFieldValidation
            required
            label={"Mensagem"}
            error={!!errors.message}
            helperText={errors.message?.message}
            name={"message"}
            defaultValue={initialMessage ?? ""}
            multiline
            rows={8}
            {...{errors}}
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
    </FormProvider>
  );
}

export default ContactForm;
