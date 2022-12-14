import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
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
          
          Full Stack Developer.
          
          </span>
          <span>
          Hola soy Julio, Ingeniero en Sistemas Informaticos, soy apasionado por la tecnologia, me encuentro en 
          continua actualizacion y especializacion de las tecnologias que ya manejo y a su vez investigando nuevas.
          Tengo conocimiento y experiencia en Redes y Telecomunicaciones Mikrotik Certified MTCNA - MTCRE - UBIQUITY, 
          Ofimatica, Estadistica Hospitalaria.
          </span>
          <span>
              
          Tengo habilidades como Web Full Stack Developer:
          </span>
          <span>
                    
          Backend: conocimientos en Node js, Express   
          
          </span>
          <span>
          
                    Frontend: conocimientos en Html, CSS, Javascript, React, Redux, Boostrap, Material UI, Framer motion.
                    
                    </span>
                    <span>
          
          Base de Datos: conocimientos en Sequelize, Postgresql, Mysql

          </span>
          <span>

          Soy una persona proactiva, de mente analitica, me desempeño bien trabajando en equipo ya que poseo buena 
          comunicacion y empatia.

          Mis experiencias me han fortalecido en la tolerancia y el autocontrol a la hora de enfrentar diferentes tipos 
          de adversidades que puedan surgir en el que hacer laboral, otorgandome flexibilidad para poder adaptarme a 
          distintas situaciones de cambio

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

  );
};

export default Intro;
