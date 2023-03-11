import React from 'react'
import './account.css'
import profile from '../../assests/profile.svg'
import cook from '../../assests/cook.svg'
const Account = () => {
    return (
        <section className="account__container">
            <div className="account__inner">
                <div className="basic">
                    <img src={profile} alt="Profile image" id="acprofile"/>
                    <input type="text" name="acname" id="acname" placeholder="Full name"/>
                    
                    <select name="country" id="country">
                        <option value="Sri lanka">sri lanka</option>
                    </select>
                    <select name="distric" id="distric">
                        <option value="Anuradhapura">Anuradhapura</option>
                    </select>
                    <select name="town" id="town">
                        <option value="Town">Town</option>
                    </select>
                    <input type="text" name="address" id="address" placeholder="Address"/>
                    <input type="tel" name="telephone1" id="telephone1" placeholder="Mobile number 1"/>
                    <input type="tel" name="telephone2" id="telephone2" placeholder="Mobile number 2"/> 
                    {/* <input type="password" name="acpassword" id="acpassword" placeholder="Password"/>                    */}
                    <input type="submit" id="billing" value="Add Billing Details"/>
                    
                </div>
                <div className="advanced">
                    <img src={cook} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Account
