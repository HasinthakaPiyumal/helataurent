import React from 'react'
import './signin.css'

import {AiOutlineArrowRight} from 'react-icons/ai'
const Signin = () => {
    return (
        <div className="signin__container">
            <h1>Log In</h1>
            <form>
                <h2>Email</h2>
                <input type="email" name="email" placeholder="email" id="email"/>
                <h2>Password</h2>
                <input type="password" name="password" placeholder="password" id="password"/>
                <br/>
                <input type="button" value="Log In"/>
                
                <a className="guest" href="/?guest=true"><AiOutlineArrowRight className="arrow"/>Log in as guest</a>
            </form>
        </div>
    )
}

export default Signin
