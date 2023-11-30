/** @format */

import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import {useAppDispatch} from "../../../redux/hooks";
import * as Yup from "yup";
import TextFieldValidation from "../../shared/form/TextFieldValidation";
import UserService from "../../../services/UserService";
import {IUser, IUserRegistration} from "../../../models/identity/User";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import AlertModal from "../../shared/modal/AlertModal";
import AutoMoreiraSnackbar from "../../shared/snackbar/AutoMoreiraSnackbar";

export default function RegistrationForm() {
  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.INFO,
  });
  const {responseContent, responseTitle, openModal, type} = stateModal;

  const [stateToast, setStateToast] = useState({
    openToast: false,
    toastMessage: "",
  });

  const {openToast, toastMessage} = stateToast;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("O primeiro nome é obrigatório!"),
    lastName: Yup.string().required("O ultimo nome é obrigatório!"),
    userName: Yup.string().required(
      "O email/nome de utilizador é obrigatório!"
    ),
    password: Yup.string()
      .required("A palavra-passe é obrigatória!")
      .min(6, "A palavra-passe tem de ter no minimo 6 caracteres!"),
    confirmPassword: Yup.string()
      .required("A palavra-passe é obrigatória!")
      .min(6, "A palavra-passe tem de ter no minimo 6 caracteres!")
      .oneOf([Yup.ref("password")], "As palavra-passes não são iguais!"),
  });

  const onSubmit = async (user: IUserRegistration) => {
    const response = await UserService.registration(user);
    if (response) {
      if (response.ok) {
        setStateToast({
          openToast: true,
          toastMessage: `Bem-vindo ${user.userName}`,
        });

        UserService.setCurrentUser(
          (await response.json().then((response) => response)) as IUser,
          dispatch,
          navigate
        );
        window.scrollTo(0, 0);
        return Promise.resolve();
      } else {
        setStateModal({
          openModal: true,
          responseTitle: "Erro!",
          responseContent: "Erro ao tentar registar o utilizador.",
          type: MessageType.ERROR,
        });
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={() => setStateModal({...stateModal, openModal: false})}
        type={type}
      />
      <AutoMoreiraSnackbar
        type={MessageType.SUCCESS}
        message={toastMessage}
        open={openToast}
        onClose={() => setStateToast({...stateToast, openToast: false})}
      />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography component="h1" variant="h2" fontFamily={"Rubik"}>
            Bem-vindo
          </Typography>
          <Typography component="h1" variant="h6" fontFamily={"Rubik"}>
            Registo de Utilizador
          </Typography>
          <Box sx={{mt: 1}}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={6} sx={{mb: 2}}>
                <TextFieldValidation
                  label={"Primeiro Nome"}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  register={register("firstName")}
                />
              </Grid>
              <Grid item xs={6} sx={{mb: 2}}>
                <TextFieldValidation
                  label={"Ultimo Nome"}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  register={register("lastName")}
                />
              </Grid>
            </Grid>
            <TextFieldValidation
              label={"Email/Nome de utilizador"}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              register={register("userName")}
            />

            <TextFieldValidation
              label={"Palavra-passe"}
              error={!!errors.password}
              helperText={errors.password?.message}
              register={register("password")}
              type={"password"}
              sx={{mt: 3}}
            />

            <TextFieldValidation
              label={"Confirmar palavra-passe"}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              register={register("confirmPassword")}
              type={"password"}
              sx={{mt: 3}}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{
                bgcolor: "#ff4d30",
                mt: 4,
                mb: 2,
                "&:hover": {
                  backgroundColor: deepOrange[900],
                },
              }}
            >
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={16}
                fontFamily={"Rubik"}
              >
                Entrar
              </Typography>
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <NavLink to="/user/login" style={{color: "#2196f3"}}>
                  <Typography fontSize={13} fontFamily={"Rubik"}>
                    {"Já sou Registado! Entrar"}
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
