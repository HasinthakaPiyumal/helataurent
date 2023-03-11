import React from 'react'
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay,Navigation } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images
import MorningTea from '../../assests/morning-tea.jpg'
import Kitchen from '../../assests/kitchen.jpg'
import Cooking from '../../assests/cooking.jpg'

const home =[
    {image:MorningTea,h6:'Outstanding food',h1:'monring moment'},
    {image:Kitchen,h6:'Outstanding food',h1:'authentic kitchen'},
    {image:Cooking,h6:'Outstanding food',h1:'delicious cooking'},
]

const Home = () => {
    return (
        <section className="home" id="home">
            <Swiper
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            navigation={true}
            modules={[Autoplay,Navigation]}
            loop={true}
            centeredSlides={true}
            className="slides"
            >
                {home.map((el)=>
                <SwiperSlide className="slide">
                    <img src={el['image']} alt=""/>
                    <div className="slider__content">
                        <div className="slider__box">
                        <h6>Outstanding Food</h6>
                        <h1>{el['h1']}</h1>
                        <a href="#foods"><div className="get-start">
                            Get Started
                        </div>
                        </a>
                        </div>

                    </div>
                </SwiperSlide>
                )
            }
            </Swiper>
                
        </section>
    )
}

export default Home
