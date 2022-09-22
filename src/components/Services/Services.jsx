import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { Swiper, SwiperSlide, } from "swiper/react"
import "swiper/css";
import Food from "../../img/food-app.png";
import Salud from "../../img/salud-app.png";
import Github from "../../img/github-app.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './JULIO-CARIAJANO-CV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <span>Proyectos realizados</span>
        
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
     
      <div className="cards">
     
        <motion.div
          initial={{ left: "-14rem", top:"20rem" }}
          whileInView={{ left: "-20rem" }}
          transition={transition}
        >
          <Card
            heading={"Mas Salud App "}
            detail={"App para la gestión de Historias Clinica que incluya además de búsquedas, filtros y ordenamientos, 3 tipos de usuario: User paciente, User medico - User admin Integración pasarela (Mercado Pago), auth0, notificaciones por email, administracion de usuários, dashboard, Metodología SCRUM, Tecnologías: Lenguaje: JavaScript, Base de datos: PostgreSQL - Sequelize- Backend: Node Js - Express- Frontend: React - Redux. Estilos: CSS, Boostrap"}
          />
        </motion.div>
        <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://app-clinica.vercel.app">

          <img className="portfolio-img" src={Salud} alt=""  />
          </a>

        </SwiperSlide>
        {/* second card */}
        <motion.div
          initial={{ left: "-14rem", top: "40rem" }}
          whileInView={{ left: "-20rem" }}
          transition={transition}
        >
          <Card
     
            heading={"SEARCH GITHUB USER APP"}
            detail={"App SPA (Single Page Application) que consume datos de API (lectura) de usuarios de github, búsqueda de usuários de Github y renderice sus propiedades Tecnologías utilizadas en Front: React, MATERIAL UI"}
          />
        </motion.div>
        <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://usergithub.vercel.app/">

          <img className="portfolio-img2" src={Github} alt="" />
          </a>
        </SwiperSlide>
        {/* 3rd */}
        <motion.div
          initial={{ top: "60rem", left: "-14rem" }}
          whileInView={{ left: "-20rem" }}
          transition={transition}
        >
          <Card
     
            heading={"FOOD - APP"}
            detail={
              "SPA (Single Page Application) que consume datos de API, CRUD (lectura, creación, edición y borrado) de recetas enbase de datos relacional (PostgreSQL).Diseñar y desarrollar una App de países que incluya:búsquedas, filtrados, ordenamientos y creaciónTecnologías utilizadas en Front: React, Redux, CSS puro y Back desarrollado en Node.js con Express.Base de datos en PostgreSQL y Sequelize."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://pi-foods-julio-cariajano.vercel.app">

          <img className="portfolio-img3" src={Food} alt="" />
        </a>
        </SwiperSlide>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
