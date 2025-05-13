import React from "react";

const Experience = ({ exp }) => {
  return (
    <div className="w-full bg-[rgba(247,242,238)] py-10">
      <div className="flex justify-center items-start gap-8 divide-white divide-x-2">
        {exp.map((item, index) => (
          <div key={item.id} className="flex items-start text-left w-1/4">
            {/* Contenido de la columna */}
            <div className="flex flex-col">
              {/* Título */}
              <p className="font-black text-lg mb-2">{item.titulo}</p>
              {/* Texto */}
              <p className="text-gray-700">{item.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
