import { Box, Grid, Typography } from "@mui/material";
import CarBox from "./CarBox";
import { IVehicle } from "../../../../models/Vehicle";
import { useState } from "react";

export default function OpportunityContent(props: { vehicles: IVehicle[] }) {
  const { vehicles } = props;

  const [activeVehicleId, setActiveVehicleId] = useState(1);
  const [colorBtn, setColorBtn] = useState(1);

  const coloringButton = (id: number) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <Grid
      container
      justifyContent={vehicles.length !== 0 ? "space-around" : "center"}
      alignItems="center"
      sx={{ px: 25, mt: vehicles.length !== 0 ? 8 : 4 }}
    >
      {vehicles.length !== 0 ? (
        <>
          <Grid item>
            {vehicles.map((vehicle) => {
              return (
                <Box sx={{ mt: vehicle.id === 1 ? 0 : 1 }}>
                  <div className="pick-box">
                    <button
                      className={`${coloringButton(vehicle.id)}`}
                      onClick={() => {
                        setActiveVehicleId(vehicle.id);
                        setColorBtn(colorBtn === vehicle.id ? 0 : vehicle.id);
                      }}
                    >
                      {vehicle.mark.name +
                        " " +
                        vehicle.model.name +
                        " " +
                        vehicle.version}
                    </button>
                  </div>
                </Box>
              );
            })}
          </Grid>
          <Grid item>
            {vehicles.map((vehicle) => {
              return vehicle.id === activeVehicleId ? (
                <CarBox vehicle={vehicle} />
              ) : (
                <></>
              );
            })}
          </Grid>
        </>
      ) : (
        <Typography color={"#706f7b"} fontSize={16} fontFamily={"Rubik"}>
          Não existem veículos de momento...
        </Typography>
      )}
    </Grid>
  );
}
