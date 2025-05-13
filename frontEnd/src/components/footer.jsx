import React from "react";
import LinkCustom from "./linkCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFigma,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full h-60 bg-gray-800 flex justify-evenly items-center">
        <div>
          <LinkCustom
            ruta={"/"}
            resource={"/public/bannerlogow.png"}
            logoClass="w-70"
          />
        </div>
        <div className="flex flex-col justify-between h-full py-6">
          <div>
            <p className="text-2xl text-white mb-9">Contacto</p>
            <div className="flex gap-9 text-2xl text-white">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFigma} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          {/* esta es la parte de copyrigt */}
          <div className="mt-1 text-white text-sm flex flex-col gap-1">
            <p>
              Copyright <FontAwesomeIcon icon={faCopyright} /> 2025 Kevin
              Murillo. Todos los derechos reservados.
            </p>
            <p>
              <span className="font-bold">PSICO</span> es libre bajo licencia
              única por el desarrollador.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
