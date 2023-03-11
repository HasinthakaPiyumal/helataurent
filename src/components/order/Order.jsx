import React,{useState} from 'react'
import './order.css'
import Search from './Search'
import Menu from './Menu'
import Foods from './Foods'
import Checkout from '../checkout/Checkout'
const Order = () => {
    const [active,setActive] = useState(false);
    return (
        <div className="order__container">
            
            <div className="order__body">
                <div>
                    <Menu  setActive={setActive} active={active}/>
                </div>
                <div className="center">
                    <Search setActive={setActive} active={active}/>
                    <Foods/>
                </div>                
            </div>
        </div>
    )
}

export default Order
