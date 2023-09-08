import HeroPages from "../components/HeroPages";
import { LinkType } from "../data/link";
import Footer from "../components/shared/footer/Footer";
import { getData } from "../services/AutoMoreiraService";
import { BASE_API_URL } from "../config/variables";
import { IVehicle } from "../models/Vehicle";
import AutoMoreiraLoader from "../components/shared/loader/AutoMoreiraLoader";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import AlertModal from "../components/shared/modal/AlertModal";
import { MessageType } from "../models/enums/MessageTypeEnum";
import VehicleCard from "../components/vehicle/card/VehicleCard";
import VehicleLenghtGrid from "../components/vehicle/grid/VehicleLenghtGrid";
import BookCar from "../components/vehicle/book-car/BookCar";

export default function Vehicles() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

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
    getData<IVehicle[]>(`${endpoint}`)
      .then((data) => {
        setVehicles(data);
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
    <Box>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={handleOkModal}
        onCancel={handleOkModal}
        type={type}
      />
      <AutoMoreiraLoader open={isLoading} />

      <HeroPages id={LinkType.VEHICLES} />

      <VehicleLenghtGrid length={vehicles.length} />

      <VehicleCard vehicles={vehicles} />

      <BookCar />

      <Footer />
    </Box>
  );
}
