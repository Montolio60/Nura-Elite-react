import React from 'react';
import './cottages.css';
import Cottage1 from '../../assets/cottage1.png';
import Layout1 from '../../assets/layout1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

function Cottages() {
  return (
    <section className='cottages'>
      <h2 className='cottages__title'>Коттеджи</h2>
      <Swiper
         modules={[Navigation]}
         slidesPerView={1}
         navigation={true}
      >
         
         <SwiperSlide className="cottages__container">
            <div className="container cottages__content">
            <div className="cottages__image">
               <img src={Cottage1} alt="" />
            </div>
            <div className="cottages__layout">
               <h4>179 <span>м</span></h4>
               <img src={Layout1} alt="" />
            </div>
            </div>
            
         </SwiperSlide>
         <SwiperSlide className="cottages__container">
            <div className="container cottages__content">
            <div className="cottages__image">
               <img src={Cottage1} alt="" />
            </div>
            <div className="cottages__layout">
               <h4>179 <span>м</span></h4>
               <img src={Layout1} alt="" />
            </div>
            </div>
            
         </SwiperSlide>
         <SwiperSlide className="cottages__container">
            <div className="container cottages__content">
            <div className="cottages__image">
               <img src={Cottage1} alt="" />
            </div>
            <div className="cottages__layout">
               <h4>179 <span>м</span></h4>
               <img src={Layout1} alt="" />
            </div>
            </div>
            
         </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Cottages