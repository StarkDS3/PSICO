import React from "react";
import { Link } from "react-router-dom";

const LinkCustom = ({ ruta, text, resource, type = "1" }) => {
  return (
    <Link to={ruta} className="text-black text-base font-medium group w-auto">
      {/* Props del logo */}
      {resource && <img src={resource} className="w-14 translate-x-15" />}

      {/* Props texto */}
      <p
        className={`${
          type == "1"
            ? "group-hover:underline group-hover:decoration-black decoration-1 decoration-transparent underline-offset-6 transition-all duration-300 ease-in"
            : "bg-gradient-to-r from-orange-200 to-pink-50 w-40 h-10 -translate-x-13 font-medium text-center content-center rounded-lg group-hover:shadow-offset group-hover:[box-shadow:4px_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in"
        } `}
      >
        {text}
      </p>
    </Link>
  );
};

export default LinkCustom;
