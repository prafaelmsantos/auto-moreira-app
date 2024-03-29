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

function Opportunity() {
  const navigate = useNavigate();
  const {data} = useQuery<vehicles>(VEHICLES, {
    variables: {
      filter: {
        opportunity: {eq: true},
        and: {
          sold: {eq: false},
        },
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

  const carDetail = vehicles.find((data) => data.id === activeVehicleId);

  if (!carDetail) return null;

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
            <img
              src={
                carDetail.vehicleImages.length !== 0
                  ? carDetail.vehicleImages.find((x) => x.isMain)?.url ??
                    defaultVehicle
                  : defaultVehicle
              }
              alt={`${carDetail.model.mark.name} ${carDetail.model.name}`}
              width={700}
              height={700}
              className="m-auto"
            />
          </div>
          <div className="w-fit m-auto space-y-4 lg:space-y-6 lg:basis-1/5">
            <div>
              <h1 className="bg-custom-orange p-2 text-white flex items-center gap-2 justify-center">
                <span className="text-2xl font-bold">
                  € {CurrencyFormatter.format(carDetail.price)}
                </span>
              </h1>
              <table>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Marca
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.model.mark.name}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Modelo
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.model.name}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Versão
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.version}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Ano
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.year}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Portas
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.doors}
                  </td>
                </tr>

                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Transmissão
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {TransmissionConverted(carDetail.transmission)}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Combustível
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {FuelTypeConverted(carDetail.fuelType)}
                  </td>
                </tr>
              </table>
            </div>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/vehicles/${carDetail.id}`);
              }}
              className="block text-center bg-custom-orange p-2 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear w-full"
            >
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunity;
