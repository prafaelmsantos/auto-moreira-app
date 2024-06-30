/** @format */

import {useEffect, useMemo, useState} from "react";
import {convertToVehicle} from "../../../models/Vehicle";
import {useQuery} from "@apollo/client";
import {VEHICLES} from "../../../models/GraphQL/Vehicles";
import {TransmissionConverted} from "../../../models/enums/TransmissionEnum";
import {FuelTypeConverted} from "../../../models/enums/FuelEnum";
import {
  vehicles_vehicles_nodes,
  vehicles,
} from "../../../models/GraphQL/types/vehicles";

import defaultVehicle from "../../../images/defaultVehicle.jpg";
import {CurrencyFormatter} from "../../../utils/CurrencyFormatter";
import {useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
import soldImage from "../../../images/soldImage.png";
import AutoMoreiraButton from "../../shared/AutoMoreiraButton";

function Opportunity() {
  const navigate = useNavigate();
  const {data} = useQuery<vehicles>(VEHICLES, {
    variables: {
      filter: {
        opportunity: {eq: true},
      },
    },
  });

  const vehicles = useMemo(
    () =>
      data?.vehicles?.nodes?.map((vehicle) =>
        convertToVehicle(vehicle as vehicles_vehicles_nodes)
      ) ?? [],
    [data]
  );

  const [activeVehicleId, setActiveVehicleId] = useState(0);

  useEffect(() => {
    setActiveVehicleId(vehicles.length !== 0 ? vehicles[0].id : 0);
  }, [vehicles]);

  const vehicle = vehicles.find((data) => data.id === activeVehicleId);

  const handleClick = (vehicleId: number) => {
    window.scrollTo(0, 0);
    navigate(`/vehicles/${vehicleId}`);
  };

  if (!vehicle) return null;

  return (
    <section id="rental-fleet">
      <div className="px-8 lg:px-28 py-16 text-center space-y-8 lg:space-y-16">
        <div className="font-bold space-y-2">
          <h1 className="text-4xl leading-tight lg:text-5xl">Oportunidades</h1>
          <p className="font-normal text-custom-grey p-4 text-1.1rem">
            Os veículos selecionados criteriosamente, para si.
          </p>
        </div>
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-2 lg:basis-1/5">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                className={`${
                  activeVehicleId === vehicle.id
                    ? "bg-custom-orange text-white"
                    : "bg-lighter-grey text-black"
                } text-left p-4 text-md font-semibold hover:bg-custom-orange hover:text-white transition-all duration-300 ease-linear`}
                onClick={() => setActiveVehicleId(vehicle.id)}
              >
                {vehicle.model.mark.name +
                  " " +
                  vehicle.model.name +
                  " " +
                  vehicle.version}
              </button>
            ))}
          </div>
          <div className="lg:basis-3/5">
            {vehicle.sold && (
              <Container
                sx={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  width: "200px",
                  mt: -9,
                  mx: 2,
                }}
              >
                <img src={soldImage} alt="vendido" />
              </Container>
            )}

            <img
              src={
                vehicle.vehicleImages.length !== 0
                  ? vehicle.vehicleImages.find((x) => x.isMain)?.url ??
                    defaultVehicle
                  : defaultVehicle
              }
              alt={`${vehicle.model.mark.name} ${vehicle.model.name}`}
              width={700}
              height={700}
              className="m-auto"
            />
          </div>
          <div className="w-fit m-auto space-y-4 lg:space-y-6 lg:basis-1/5">
            <div>
              <h1 className="bg-custom-orange p-2 text-white flex items-center gap-2 justify-center">
                <span className="text-2xl font-bold">
                  € {CurrencyFormatter.format(vehicle.price)}
                </span>
              </h1>
              <table>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Marca
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {vehicle.model.mark.name}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Modelo
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {vehicle.model.name}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Versão
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {!vehicle.version || vehicle.version === ""
                      ? " - "
                      : vehicle.version}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Ano
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {vehicle.year}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Portas
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {vehicle.doors}
                  </td>
                </tr>

                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Transmissão
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {TransmissionConverted(vehicle.transmission)}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Combustível
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {FuelTypeConverted(vehicle.fuelType)}
                  </td>
                </tr>
              </table>
            </div>
            <AutoMoreiraButton
              onClick={() => handleClick(vehicle.id)}
              text={"Ver mais"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunity;
