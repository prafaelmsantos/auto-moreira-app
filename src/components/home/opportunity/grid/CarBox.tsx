import { useState } from "react";
import { IVehicle } from "../../../../models/Vehicle";
import AudiA1 from "../../../../images/cars-big/audia1.jpg";
import { Button, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { FuelTypeConverted } from "../../../../models/enums/FuelEnum";
import { TransmissionConverted } from "../../../../models/enums/TransmissionEnum";

export default function CarBox(props: { vehicle: IVehicle }) {
  const { vehicle } = props;
  const [carLoad, setCarLoad] = useState(true);
  const navigate = useNavigate();
  return (
    <div key={vehicle.id} className="box-cars">
      {/* car */}
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={AudiA1}
          alt="car_img"
          onLoad={() => setCarLoad(false)}
        />
      </div>
      {/* description */}
      <div className="pick-description">
        <div className="pick-description__price">
          <span>€ {vehicle.price}</span>
        </div>
        <div className="pick-description__table">
          <div className="pick-description__table__col">
            <span>Marca</span>
            <span>{vehicle.mark.name}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Modelo</span>
            <span>{vehicle.model.name}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Versão</span>
            <span>{vehicle.version}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Ano</span>
            <span>{vehicle.year}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Portas</span>
            <span>{vehicle.doors}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Transmissão</span>
            <span>{TransmissionConverted(vehicle.transmission)}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Combustível</span>
            <span>{FuelTypeConverted(vehicle.fuelType)}</span>
          </div>
        </div>

        {/* btn cta */}
        <Button
          className="cta-btn"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#ff4d30",
            py: 1.3,
            "&:hover": {
              backgroundColor: deepOrange[900],
            },
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/vehicles/${vehicle.id}`);
          }}
        >
          <Typography
            color={"white"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
            fontSize={19}
          >
            Saber Mais
          </Typography>
        </Button>
      </div>
    </div>
  );
}
