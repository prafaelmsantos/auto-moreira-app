/** @format */

import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {NavLink, useNavigate} from "react-router-dom";
import {IUser, IUserLogin} from "../../../models/identity/User";
import {MessageType} from "../../../models/enums/MessageTypeEnum";
import {useAppDispatch} from "../../../redux/hooks";
import UserService from "../../../services/UserService";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TextFieldValidation from "../../shared/TextFieldValidation";
import {setSnackBar} from "../../../redux/snackBarSlice";
import {setModal} from "../../../redux/modalSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(
      "O email/nome de utilizador é obrigatório!"
    ),
    password: Yup.string().required("A palavra-passe é obrigatória!"),
  });

  const onSubmit = async (user: IUserLogin) => {
    const response = await UserService.login(user);
    if (response) {
      if (response.ok) {
        const responseUser = (await response
          .json()
          .then((response) => response)) as IUser;

        UserService.setCurrentUser(responseUser, dispatch, navigate);

        window.scrollTo(0, 0);

        dispatch(
          setSnackBar({
            open: true,
            message: `Bem-vindo ${responseUser.firstName}`,
            type: MessageType.SUCCESS,
          })
        );
        return Promise.resolve();
      } else {
        dispatch(
          setModal({
            title: "Erro ao tentar efetuar login ao sistema",
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
          Entrar com
        </Typography>
        <Box sx={{mt: 2}}>
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{
              bgcolor: "#ff4d30",
              mt: 3,
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
              <NavLink to="/user/registration" style={{color: "#2196f3"}}>
                <Typography fontSize={13} fontFamily={"Rubik"}>
                  {"Não tem uma conta? Registe-se!"}
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
