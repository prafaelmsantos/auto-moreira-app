import { useEffect, useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "../data/CarData";
import { Typography } from "@mui/material";
import { BASE_API_URL } from "../config/variables";
import { getData } from "../services/AutoMoreiraService";
import { Vehicle } from "../models/Vehicle";
import { MessageType } from "../models/enums/MessageTypeEnum";
import AlertModal from "./AlertModal";
import AutoMoreiraLoader from "./AutoMoreiraLoader";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id: string) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id: string) => {
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

  console.log(vehicles);

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
      <Typography fontWeight={"bold"} fontSize={40} variant="h3">
        Veículos
      </Typography>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Veículos</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
