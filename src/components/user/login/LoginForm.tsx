import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser, IUserLogin } from "../../../models/identity/User";
import { MessageType } from "../../../models/enums/MessageTypeEnum";
import AutoMoreiraSnackbar from "../../shared/snackbar/AutoMoreiraSnackbar";
import { useAppDispatch } from "../../../redux/hooks";
import AlertModal from "../../shared/modal/AlertModal";
import UserService from "../../../services/UserService";

export default function LoginForm() {
  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.INFO,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = async (user: IUserLogin) => {
    const response = await UserService.login(user);
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

        return Promise.resolve();
      } else {
        setStateModal({
          openModal: true,
          responseTitle: "Erro!",
          responseContent:
            "Lamentamos mas os dados inseridos não estão corretos. Por favor, verifique o username ou a password.",
          type: MessageType.ERROR,
        });
      }
    }
  };

  const { responseContent, responseTitle, openModal, type } = stateModal;
  const [stateToast, setStateToast] = useState({
    openToast: false,
    toastMessage: "",
  });

  const { openToast, toastMessage } = stateToast;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      userName: String(data.get("email")),
      password: String(data.get("password")),
    });
  };

  const InputLabelStyle = {
    style: {
      fontSize: 16,
    },
  };

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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              InputProps={InputLabelStyle}
              InputLabelProps={InputLabelStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={InputLabelStyle}
              InputLabelProps={InputLabelStyle}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
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
                <NavLink to="/user/registration" style={{ color: "#2196f3" }}>
                  <Typography fontSize={13} fontFamily={"Rubik"}>
                    {"Não tem uma conta? Registe-se!"}
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
