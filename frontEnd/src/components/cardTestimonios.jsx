import React from "react";

const CardTestimonios = ({ testimonio }) => {
  return (
    <>
      <div className="w-full h-auto bg-yellow-400 py-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {testimonio.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={item.foto}
                alt={`Foto de ${item.nombre}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{item.nombre}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardTestimonios;
