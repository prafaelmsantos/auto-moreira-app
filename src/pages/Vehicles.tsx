import HeroPages from "../components/HeroPages";
import { LinkType } from "../data/link";
import Footer from "../components/Footer";
import { getData } from "../services/AutoMoreiraService";
import { BASE_API_URL } from "../config/variables";
import { Vehicle } from "../models/Vehicle";
import AutoMoreiraLoader from "../components/global/loader/AutoMoreiraLoader";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import AlertModal from "../components/global/modal/AlertModal";
import { MessageType } from "../models/enums/MessageTypeEnum";
import VehicleCard from "../components/vehicle/card/VehicleCard";
import VehicleLenghtGrid from "../components/vehicle/grid/VehicleLenghtGrid";

export default function Vehicles() {
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

      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>+351 231472555</h3>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </Box>
  );
}
