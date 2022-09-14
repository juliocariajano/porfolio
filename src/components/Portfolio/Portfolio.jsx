import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide, } from "swiper/react"
import "swiper/css";
import Food from "../../img/food-app.png";
import Salud from "../../img/salud-app.png";
import Github from "../../img/github-app.png";
//import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://app-clinica.vercel.app">

          <img src={Salud} alt=""  />
          </a>

        </SwiperSlide>
        {/* <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://pi-foods-julio-cariajano.vercel.app">

          <img src={Food} alt="" />
        </a>
        </SwiperSlide>
        
        <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://usergithub.vercel.app/">

          <img src={Github} alt="" />
          </a>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
        {/* </SwiperSlide>  */}
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://app-clinica.vercel.app">

          <img src={Salud} alt=""  />
          </a>

        </SwiperSlide> */}
        <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://pi-foods-julio-cariajano.vercel.app">

          <img src={Food} alt="" />
        </a>
        </SwiperSlide>
        {/* <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://usergithub.vercel.app/">

          <img src={Github} alt="" />
          </a>
        </SwiperSlide>  */}
        {/* <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
        {/* </SwiperSlide>  */}
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://app-clinica.vercel.app">

          <img src={Salud} alt=""  />
          </a>

        </SwiperSlide> */}
        {/* <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://pi-foods-julio-cariajano.vercel.app">

          <img src={Food} alt="" />
        </a>
        </SwiperSlide> */}
         <SwiperSlide>
        <a target="_blank" rel="noreferrer" href="https://usergithub.vercel.app/">

          <img src={Github} alt="" />
          </a>
        </SwiperSlide> 
        {/* <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
        {/* </SwiperSlide>  */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
