import React, { useContext } from "react";
import "./TechSkill.css";
import { Swiper, SwiperSlide, } from "swiper/react"
import "swiper/css";
import Js from "../../img/js.png";
import Posgres from "../../img/postgres.png";
import Node from "../../img/node.png";
import Reac from "../../img/react.png";
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
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        grabCursor={true}
        className="techskill-slider">
    

        <SwiperSlide>

          <img src={Js} alt=""  />
          <img src  ={Posgres} alt="" />

        </SwiperSlide>
       
         
         
        <SwiperSlide>
          <img src={Html} alt="" />
          <img src={Node} alt="" />

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechSkill;
