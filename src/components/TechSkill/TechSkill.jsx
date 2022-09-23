import React, { useContext } from "react";
import "./TechSkill.css";
import { Swiper, SwiperSlide, } from "swiper/react"
import "swiper/css";
import Js from "../../img/js.png";
import Posgres from "../../img/postgres.png";
import Node from "../../img/node.png";
import Reac from "../../img/reactlogo.png";
import Mysql from "../../img/mysql.png";
import Redux from "../../img/redux.png";
import Boostrap from "../../img/boostrap.png";
import Framer from "../../img/framer.png";
import Sequelize from "../../img/sequelize.png";


import Html from "../../img/html-css.png";
import { themeContext } from "../../Context";
const TechSkill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="techskill" id="techskill">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Tech Skill</span>
        <SwiperSlide>
          <img className="techskill1" src  ={Posgres} alt="" />
          <img className="techskill1" src  ={Mysql} alt="" />
          <img className="techskill1" src={Node} alt="" />
          <img  className="techskill1" src={Reac} alt=""  />
          <img  className="techskill1" src={Redux} alt=""  />

        </SwiperSlide>
        <SwiperSlide>
          <img className="techskill1" src  ={Boostrap} alt="" />
          <img className="techskill1" src={Js} alt=""  />
          <img className="techskill1" src={Html} alt="" />
          <img  className="techskill1" src={Framer} alt=""  />
          <img className="techskill1" src={Sequelize} alt="" />

        </SwiperSlide>

     
    </div>
  );
};

export default TechSkill;
