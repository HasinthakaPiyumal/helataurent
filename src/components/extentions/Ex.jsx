import React from 'react'
import './ex.css'
import {FaShoppingCart} from 'react-icons/fa'
const ex = () => {
    return (
        <div className="cart">
            <a href="/cart" id="cart"><FaShoppingCart/></a>
        </div>
    )
}

export default ex
