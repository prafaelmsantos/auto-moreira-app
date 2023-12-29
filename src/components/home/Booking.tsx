/** @format */

import React from "react";
import {bookingInputs} from "../../data/input";
import {AiFillCalendar} from "react-icons/ai";

function Booking() {
  return (
    <section id="booking">
      <div className="mx-8 my-16 p-6 lg:p-12 lg:mx-28 bg-white bg-book-bg rounded shadow-white-box space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Procurar Veículo</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          {bookingInputs.select.map((data) => (
            <div key={data.id} className="flex flex-col gap-4">
              <label htmlFor={data.htmlId} className="flex items-center gap-2">
                <span className="text-custom-orange text-xl">
                  <data.label.icon />
                </span>
                <span className="font-semibold">{data.label.text}</span>
                <span className="text-custom-orange font-bold">*</span>
              </label>
              <select
                id={data.htmlId}
                className="p-2 border border-lightest-grey text-custom-grey rounded text-sm bg-transparent"
              >
                {data.options.map((data) => (
                  <option key={data.id} value={data.option} className="m-8">
                    {data.option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          {bookingInputs.input.map((data) => (
            <div key={data.id} className="flex flex-col gap-4">
              <label htmlFor={data.htmlId} className="flex items-center gap-2">
                <span className="text-custom-orange text-xl">
                  <AiFillCalendar />
                </span>
                <span className="font-semibold">{data.label}</span>
                <span className="text-custom-orange font-bold">*</span>
              </label>
              <input
                type="date"
                id={data.htmlId}
                className="p-2 border border-lightest-grey text-custom-grey rounded text-sm w-full bg-transparent"
              />
            </div>
          ))}
          <div>
            <button className="bg-custom-orange w-full shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear text-white p-2 font-bold rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
