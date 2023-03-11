import React from 'react'
import './about.css'
import AboutImage from '../../assests/about.png'
import {BiDish} from 'react-icons/bi'
import {ImGlass} from 'react-icons/im'
import {GiCook} from 'react-icons/gi'

import Icon1 from '../../assests/about-icon-1.png'
import Icon2 from '../../assests/about-icon-2.png'
import Icon3 from '../../assests/about-icon-3.png'

const About = () => {
    return (
        <section id="about">
            <div className="about__container">
                <div className="about__image">
                    <img src={AboutImage}/>
                </div>
                <div className="about__content">
                    <h2>Welcome To Our Restaurent</h2>
                    <p>Established in 2022, Restaurent is a household name for foods in Sri Lanka. Our goal is to ensure customer satisfaction by means of providing the finest and freshest ingredients in food preparation and providing an exceptional and friendly dining experience for our guests.</p>
                    <a href="/about">
                        <div className="readmore-btn">
                            Read More
                        </div>
                    </a>
                    <div className="services">
                        <div className="service">
                            <div className="icon"><img src={Icon1}/></div>
                            <h3> quality food</h3>
                        </div>
                        <div className="service">
                            <div className="icon"><img src={Icon2}/></div>
                            <h3>food & frink</h3>
                        </div>
                        <div className="service">
                            <div className="icon"><img src={Icon3}/></div>
                            <h3>expert chef</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
