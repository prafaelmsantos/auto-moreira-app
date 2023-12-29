/** @format */

import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {NavLink, useNavigate} from "react-router-dom";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import {useAppDispatch} from "../../../redux/hooks";
import * as Yup from "yup";
import UserService from "../../../services/UserService";
import {IUser, IUserRegistration} from "../../../models/identity/User";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {setSnackBar} from "../../../redux/snackBarSlice";
import {setModal} from "../../../redux/modalSlice";
import TextFieldValidation from "../../shared/TextFieldValidation";

export default function RegistrationForm() {
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
        UserService.setCurrentUser(
          (await response.json().then((response) => response)) as IUser,
          dispatch,
          navigate
        );
        window.scrollTo(0, 0);
        dispatch(
          setSnackBar({
            open: true,
            message: `Bem-vindo ${user.userName}`,
            type: MessageType.SUCCESS,
          })
        );
        return Promise.resolve();
      } else {
        dispatch(
          setModal({
            title: "Erro ao tentar efetuar um novo registo ao sistema",
            message:
              "Lamentamos mas os dados inseridos não estão corretos. Por favor, verifique o email ou a password.",
            type: MessageType.ERROR,
            open: true,
          })
        );
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
  );
}
