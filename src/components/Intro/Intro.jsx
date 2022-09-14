import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
//import Vector2 from "../../img/Vector2.png";
import boy from "../../img/yoy.png";
//import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hola! Yo soy</span>
          <span>Julio Cariajano</span>
          <span>
          Soy Apasionado por la tecnología de profesion Ingeniero en Sistemas Informáticos con habilidades como 
          Web Full Stack Developer, conocimientos en 
          Javascript, React, Redux, Node.js, Express, Sequelize, Postgresql, 
          además de estar en continua especialización, tengo conocimientos y experiencia en 
          Redes y Telecomunicaciones - Mikrotik Certified MTCCNA - MTCRE - UBIQUITY, Videovigilacia, 
          Ofimatica, Estadistica Hospitalaria..
          Soy una persona proactiva, de mente analítica, con grandes habilidades de comunicación y empatía.
          Mis experiencias me han fortalecido, tanto en la tolerancia, cómo en el autocontrol ante las 
          adversidades, lo que favorece mi adaptación al cambio.
          
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a target="_blank" rel="noreferrer" href="https://github.com/juliocariajano">
          <img src={Github} alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/juliocariajano/">
          <img src={LinkedIn} alt="" />
          </a>
                  </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img className="imgsize" src={boy} alt="" />
        {/* <img src={Vector2} alt="" /> */}
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          // src={boy}
          alt=""
        />

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* <FloatinDiv img={boy} text1="Web" text2="Full Stack Developer" /> */}
        {/* </motion.div> */}

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
