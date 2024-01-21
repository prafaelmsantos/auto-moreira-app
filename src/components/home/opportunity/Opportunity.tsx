/** @format */

import {useState} from "react";
import {convertToVehicle} from "../../../models/Vehicle";
import {useQuery} from "@apollo/client";
import {VEHICLES} from "../../../queries/Vehicles";
import {
  vehicles,
  vehicles_vehicles_nodes,
} from "../../../queries/types/vehicles";
import {TransmissionConverted} from "../../../models/enums/TransmissionEnum";
import {FuelTypeConverted} from "../../../models/enums/FuelEnum";

function Opportunity() {
  const {data} = useQuery<vehicles>(VEHICLES);

  const vehicles =
    data?.vehicles?.nodes?.map((vehicle) =>
      convertToVehicle(vehicle as vehicles_vehicles_nodes)
    ) ?? [];

  const [activeVehicleId, setActiveVehicleId] = useState(1);

  const carDetail = vehicles.find((data) => data.id === activeVehicleId);

  if (!carDetail) return null;

  return (
    <section id="rental-fleet">
      <div className="px-8 lg:px-28 py-16 text-center space-y-8 lg:space-y-16">
        <div className="font-bold space-y-2">
          <h1 className="text-4xl leading-tight lg:text-5xl">
            Oportunidades de veículos
          </h1>
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
                } text-left p-4 text-xl font-semibold hover:bg-custom-orange hover:text-white transition-all duration-300 ease-linear`}
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
              src={require(`../../../images/Audi A1.png`)}
              alt={"Audi A1"}
              width={500}
              height={500}
              className="m-auto"
            />
          </div>
          <div className="w-fit m-auto space-y-4 lg:space-y-6 lg:basis-1/5">
            <div>
              <h1 className="bg-custom-orange p-2 text-white flex items-center gap-2 justify-center">
                <span className="text-2xl font-bold">€ {carDetail.price}</span>
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
            <div>
              <a
                href="#booking"
                className="text-xl block w-full font-bold bg-custom-orange p-2 text-white shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded"
              >
                Saber mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunity;
