import React from 'react'
import './signup.css'
const Signup = () => {
    return (
        <div className="signup__container">
        <h1>REGISTER</h1>
        <form>
            <h2>Full Name</h2>
            <input type="text" name="name" placeholder="Full Name" id="name"/>
            <h2>Email</h2>
            <input type="email" name="email" placeholder="email" id="email"/>
            <h2>Password</h2>
            <input type="password" name="password" placeholder="Password" id="password"/>
            <h2>Confirm Password</h2>
            <input type="password" name="cpassword" placeholder="Confirm Password" id="cpassword"/>
            <br/>
            <input type="button" value="Create Account"/>
        </form>
    </div>
    )
}

export default Signup
