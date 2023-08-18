import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const InputLabelStyle = {
    style: {
      fontSize: 16,
    },
  };

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  );
}
