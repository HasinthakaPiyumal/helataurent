import React,{useState, createRef} from 'react'
import './menu.css'

import {motion} from 'framer-motion'


const dis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus enim, efficitur vitae eros et, aliquet tempor metus."
const menu = [
    [
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
        {name:'Rice and curry',price:'RS.900',discription:dis},
    ],
    [
        {name:'biriyani',price:'RS.900',discription:dis},
        {name:'biriyani',price:'RS.900',discription:dis},
        {name:'biriyani',price:'RS.900',discription:dis},
        {name:'biriyani',price:'RS.900',discription:dis},
        {name:'biriyani',price:'RS.900',discription:dis},
        {name:'biriyani',price:'RS.900',discription:dis},
    ],
    [
        {name:'dinner Food Item',price:'RS.900',discription:dis},
        {name:'dinner Food Item',price:'RS.900',discription:dis},
        {name:'dinner Food Item',price:'RS.900',discription:dis},
        {name:'dinner Food Item',price:'RS.900',discription:dis},
        {name:'dinner Food Item',price:'RS.900',discription:dis},
    ],
    [
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
        {name:'drink Item',price:'RS.900',discription:dis},
    ],
    [
        {name:'desser Item',price:'RS.900',discription:dis},
        {name:'desser Item',price:'RS.900',discription:dis},
        {name:'desser Item',price:'RS.900',discription:dis},
        {name:'desser Item',price:'RS.900',discription:dis},
        {name:'desser Item',price:'RS.900',discription:dis},
        {name:'desser Item',price:'RS.900',discription:dis},
    ],
]



const useRefDimensions = (ref) => {
    const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
    React.useEffect(() => {
      if (ref.current) {
        const { current } = ref
        const boundingRect = current.getBoundingClientRect()
        const { width, height } = boundingRect
        setDimensions({ width: Math.round(width), height: Math.round(height) })
      }
    }, [ref])
    return dimensions
  }


const Menu = () => {
    const [menuSelect,setMenuSelect] = useState(0);

    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)

    return (
        <section className="menu" id="menu">
            <div className="title">
                <h6>Our menu</h6>
                <h2>Our populer dishes</h2>
            </div>
            
            <div className="meals">
                <input type="radio" name="meal" id="breakfast" value={0} onChange={()=>{setMenuSelect(0)}} defaultChecked/>
                <label className="meal" for="breakfast">breakfast</label>
                <input type="radio" name="meal" id="lunch" value={1} onChange={()=>{setMenuSelect(1)}}/>
                <label className="meal" for="lunch">lunch</label>
                <input type="radio" name="meal" id="dinner" value={2} onChange={()=>{setMenuSelect(2)}}/>
                <label className="meal" for="dinner">dinner</label>
                <input type="radio" name="meal" id="drinks" value={3} onChange={()=>{setMenuSelect(3)}}/>
                <label className="meal" for="drinks">drinks</label>
                <input type="radio" name="meal" id="dessert" value={4} onChange={()=>{setMenuSelect(4)}}/>
                <label className="meal" for="dessert">dessert</label>                
            </div>
            <div className="mmm" id="dishes" style={{height:dimensions.height}}>
            <div className="dishes" ref={divRef}>
                {menu[menuSelect].map((el)=>
                    <motion.div className="dish"
                    initial={{
                        scale:0.5
                    }}
                    animate={{
                        scale:1
                    }}
                    transition={{
                        duration:0.1
                        
                    }}>
                    <div className="head" >
                        <div className="name">{el['name']}</div>
                        <div className="price">{el['price']}</div>
                    </div>
                    <div className="description">{el['discription']}</div>
                    </motion.div>
                )
                }
                
                
            </div>
            </div>
            
            
        </section>
    )
}

export default Menu
