import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
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
        <spane>
          {/* Lorem ispum is simpley dummy text of printing of printing Lorem */}
          <br />
          {/* ispum is simpley dummy text of printing */}
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "-9rem", top:"20rem" }}
          whileInView={{ left: "-26rem" }}
          transition={transition}
        >
          <Card
            //emoji={HeartEmoji}
            heading={"Mas Salud App "}
            detail={"App para la gestión de Historias Clinica que incluya además de búsquedas, filtros y ordenamientos, 3 tipos de usuario: User paciente, User medico - User admin Integración pasarela (Mercado Pago), auth0, notificaciones por email, administracion de usuários, dashboard, Metodología SCRUM, Tecnologías: Lenguaje: JavaScript, Base de datos: PostgreSQL - Sequelize- Backend: Node Js - Express- Frontend: React - Redux. Estilos: CSS, Boostrap"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-9rem", top: "50rem" }}
          whileInView={{ left: "-26rem" }}
          transition={transition}
        >
          <Card
            //emoji={Glasses}
            heading={"SEARCH GITHUB USER APP"}
            detail={"App SPA (Single Page Application) que consume datos de API (lectura) de usuarios de github, búsqueda de usuários de Github y renderice sus propiedades Tecnologías utilizadas en Front: React, MATERIAL UI"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "82rem", left: "-9rem" }}
          whileInView={{ left: "-26rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"FOOD - APP"}
            detail={
              "SPA (Single Page Application) que consume datos de API, CRUD (lectura, creación, edición y borrado) de recetas enbase de datos relacional (PostgreSQL).Diseñar y desarrollar una App de países que incluya:búsquedas, filtrados, ordenamientos y creaciónTecnologías utilizadas en Front: React, Redux, CSS puro y Back desarrollado en Node.js con Express.Base de datos en PostgreSQL y Sequelize."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
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
