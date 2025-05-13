import React from "react";
import Navbar from "../components/navbar";
import LinkCustom from "../components/linkCustom";
import SobreNosotros from "../components/buttons/sobreNosotros";
import Register from "../components/buttons/register";
import CardTestimonios from "../components/cardTestimonios";
import testmonios from "../data/testimonios.json";
import expe from "../data/exphome.json";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Whatsapp from "../components/buttons/globoWhatsap";

const Home = () => {
  return (
    <>
      {/* "md:flex display: flex w-full lg:text-x1 min-h-screen" */}
      <div className="w-full min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Hero section */}
        <div className="w-full h-130 bg-white flex justify-evenly ">
          <div className="w-100 h-full flex flex-col justify-center gap-5 ">
            <p className="text-4xl font-bold ">AYUDA TU SALUD MENTAL</p>
            <p className="w-130">
              En <span className="font-bold">PSICO</span> valoramos
              profundamente la escucha activa y el acompañamiento empático,
              ayudándote a encontrar el equilibrio y la serenidad en tu vida.
            </p>
            <SobreNosotros />
          </div>

          <img
            className="w-120 h-120 flex flex-col justify-center"
            src="/public/0GAT5MY5I5T75UVN.png"
          />
        </div>
        {/* Seccion de speech */}
        <div className="w-full h-80 bg bg-[rgba(247,242,238)] flex justify-center items-center">
          <div className="max-w-[54rem] text-center">
            <p className="text-lg bg-gradient-to-r from-[rgba(98,98,98)] via-[rgba(163,54,54)] to-[rgba(98,98,98)] bg-clip-text text-transparent">
              La autoaceptación y el amor propio son esenciales. Todos
              enfrentamos problemas, pero quiero que recuerden que cualquier
              desafío tiene solución o tratamiento. Buscar ayuda es una muestra
              de fortaleza. Reconozcan su valor y sepan que son dignos de amor y
              apoyo. No se rindan, confíen en su capacidad para superar
              obstáculos y ámense a sí mismos en cada paso del camino.
            </p>
          </div>
        </div>
        {/* mini Seccion de nosotros */}
        <div className="w-full h-150 bg-white flex justify-evenly items-center">
          <img
            className="w-100 h-100 flex flex-col justify-center "
            src="public/0GAT5MY5I5T75UVN.png"
          />
          <div className="w-100 h-full flex flex-col justify-center gap-5 ">
            <p className="text-4xl font-bold ">SOBRE NOSOTROS</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <Register />
          </div>
        </div>
        {/* Mini seccion de experiencia */}
        <Experience exp={expe} />
        {/* Testimonios */}
        <CardTestimonios testimonio={testmonios} />
        {/* footer */}
        <Footer />
        {/* globo de whatsapp */}
        <Whatsapp />
      </div>
    </>
  );
};

export default Home;
