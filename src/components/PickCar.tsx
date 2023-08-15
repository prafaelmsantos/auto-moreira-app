import { useEffect, useState } from "react";
import CarBox from "./CarBox";
import { Box, Grid, Typography } from "@mui/material";
import { BASE_API_URL } from "../config/variables";
import { getData } from "../services/AutoMoreiraService";
import { Vehicle } from "../models/Vehicle";
import { MessageType } from "../models/enums/MessageTypeEnum";
import AlertModal from "./AlertModal";
import AutoMoreiraLoader from "./AutoMoreiraLoader";

export default function PickCar() {
  const [activeVehicleId, setActiveVehicleId] = useState(1);
  const [colorBtn, setColorBtn] = useState(1);

  const coloringButton = (id: number) => {
    return colorBtn === id ? "colored-button" : "";
  };

  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.ERROR,
  });
  const { responseContent, responseTitle, openModal, type } = stateModal;

  const handleOkModal = () => {
    setStateModal({ ...stateModal, openModal: false });
  };

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/vehicles"}`;
    getData<Vehicle[]>(`${endpoint}`)
      .then((data) => {
        setVehicles(data.filter((x) => !x.opportunity));
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
        setStateModal({
          ...stateModal,
          openModal: true,
          responseTitle: "Erro!",
          responseContent:
            "Erro ao carregar os veículos. Por favor tente mais tarde...",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={handleOkModal}
        onCancel={handleOkModal}
        type={type}
      />
      <AutoMoreiraLoader open={isLoading} />

      <Grid container justifyContent="center">
        <Typography fontWeight={"bold"} fontFamily={"Rubik"} fontSize={40}>
          Oportunidades de veículos
        </Typography>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Typography color={"#706f7b"} fontSize={16} fontFamily={"Rubik"}>
          Os veículos selecionados criteriosamente, para si.
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent={vehicles.length !== 0 ? "space-between" : "center"}
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
    </>
  );
}
