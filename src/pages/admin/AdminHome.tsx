import { Box, Container, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useEffect } from "react";

export default function AdminHome() {
  const dispatch = useAppDispatch();
  const user = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      setUser({
        lastName: "ajaj",
        firstName: "jaja",
        userName: "ajaj",
        token: "hhdhd",
        password: "sjsjs",
        email: "sjsjs",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(user);
  return (
    <Box>
      <HeroPages id={LinkType.ADMIN} title="Início" />
      <Grid container direction="row" sx={{ px: 20 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9}>
          <Container>
            <Box>HOME</Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
