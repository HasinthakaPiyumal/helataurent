import React from 'react'
import './sign.css'
import Signin from './Signin'
import Signup from './Signup'
import  back from '../../assests/gallery-2.jpg'



import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Sign = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (!(index===1)?"LOG IN":"REGISTER") + "</span>";
        },
      };
    
    return (
        <div className="sign__container">
            <Swiper
                
                modules={[Pagination]}
                pagination={pagination}
                className="toggle__sign"
            >
            <SwiperSlide><Signin/></SwiperSlide>
            <SwiperSlide><Signup/></SwiperSlide>

            </Swiper>
            <div className="sign__image">
                <img src={back} className="back" alt=""/>
            </div>
       </div>
    )
}

export default Sign
