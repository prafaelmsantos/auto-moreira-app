/** @format */

import {Button, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {IClientMessage} from "../../../models/ClientMessage";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import TextFieldValidation from "../../shared/TextFieldValidation";
import {useAppDispatch} from "../../../redux/hooks";
import {setModal} from "../../../redux/modalSlice";
import {setSnackBar} from "../../../redux/snackBarSlice";
import {
  ClientMessageSchema,
  IClientMessageSchema,
} from "../service/ClientMessageSchema";
import {createClientMessage} from "../service/ClientMessageService";
import {setLoader, setToInitialLoader} from "../../../redux/loaderSlice";

function ContactForm() {
  const dispatch = useAppDispatch();
  const methods = useForm<IClientMessageSchema>({
    resolver: async (data, context, options) =>
      await zodResolver(ClientMessageSchema)(data, context, options),
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const {
    control,
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
  }; // your form submit function which will invoke after successful validation

  return (
    <FormProvider {...methods}>
      <Grid container direction="row">
        <Grid item xs={12}>
          <TextFieldValidation
            required
            label={"Nome Completo"}
            helperText={errors.name?.message}
            name={"name"}
            error={!!errors.name}
            defaultValue={""}
            {...{errors, control}}
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
            {...{errors, control}}
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
            {...{errors, control}}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextFieldValidation
            required
            label={"Mensagem"}
            error={!!errors.message}
            helperText={errors.message?.message}
            name={"message"}
            defaultValue={""}
            multiline
            rows={5}
            {...{errors, control}}
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
