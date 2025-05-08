import React, { useState, useEffect } from "react";

const CardTestimonios = ({ testimonio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonio.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonio]);

  const getClassname = (index) => {
    const leftIndex = (currentIndex - 1 + testimonio.length) % testimonio.length;
    const rightIndex = (currentIndex + 1) % testimonio.length;

    if (index === currentIndex) {
      return "transform scale-100 opacity-100 z-20 translate-x-0";
    }
    if (index === leftIndex) {
      return "transform scale-90 opacity-60 z-10 -translate-x-64";
    }
    if (index === rightIndex) {
      return "transform scale-90 opacity-60 z-10 translate-x-64";
    }
    return "hidden";
  };

  return (
    <div className="w-full h-[400px] bg-white py-10 flex justify-center items-center overflow-hidden">
      <div className="relative w-[960px] h-full flex items-center justify-center">
        {testimonio.map((item, index) => (
          <div
            key={item.id}
            className={`absolute transition-all duration-700 ease-in-out ${getClassname(index)}`}
          >
            <div className="w-80 h-80 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center">
              <img
                src={item.foto}
                alt={`Foto de ${item.nombre}`}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{item.nombre}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.opinion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTestimonios;
