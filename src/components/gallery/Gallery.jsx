import React,{useState} from 'react'
import './gallery.css'

import {FaSearchPlus} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'

import img1 from '../../assests/gallery-1.jpg'
import img2 from '../../assests/gallery-2.jpg'
import img3 from '../../assests/gallery-3.jpg'
import img4 from '../../assests/gallery-4.jpg'
import img5 from '../../assests/gallery-5.jpg'
import img6 from '../../assests/gallery-6.jpg'
const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6    
]

const Gallery = () => {
    const [full,setFull] = useState('gclose');
    const [fullImage,setFullImage] = useState()
    return (
        <section className="gallery" id="gallery">
            <div className="title">
                <h6>Our gallery</h6>
                <h2>our untold story</h2>
            </div>
            <div className="photos"> 
            {
                gallery.map((el)=>
                <div className="tile" onClick={()=>{setFullImage(el);setFull('')}}><FaSearchPlus className="icon"/><img src={el}/></div>
                )
            }             
            </div>
            <div className={"gallery-view "+ full}>
                <img src={fullImage}/>
                <CgClose className="icon" onClick={()=>{setFull('gclose')}}/>
            </div>
        </section>
    )
}

export default Gallery
