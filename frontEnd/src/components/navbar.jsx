import React from "react";
import LinkCustom from "./linkCustom";

const Navbar = () => {
  return (
    <>
      {/* Tarjeta Padre*/}
      <nav className="w-full h-50 bg-[rgba(247,242,238)] flex justify-center items-center">
        {/* Tarjeta Hija */}
        <div className="w-full h-21 shadow-lg bg-white flex justify-center items-center ">
          {/* Logo */}
          <div>
            <LinkCustom ruta={"/"} resource={"/public/psico.png"} />
          </div>

          {/* Botones */}
          <div className="w-full flex justify-center space-x-5">
            <LinkCustom ruta={"/"} text={"INICIO"} />
            <LinkCustom ruta={"/nosotros"} text={"NOSOTROS"} />
            <LinkCustom ruta={"/servicios"} text={"SERVICIOS"} />
            <LinkCustom ruta={"/contacto"} text={"CANALES DE ATENCION"} />
          </div>

          {/* Pagos */}

          <LinkCustom ruta={"/"} text={"PAGOS EN LINEA"} type="2" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
