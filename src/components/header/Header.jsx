import React,{useState} from 'react'
import './header.css'
import {ImSpoonKnife,ImCross} from 'react-icons/im'
import {RiShutDownLine} from 'react-icons/ri'
import {HiMenu} from 'react-icons/hi'
import {ReactSession} from 'react-client-session';



const Header = () => {
    const [menu,setMenu] = useState(0);
    ReactSession.setStoreType("localStorage");
    const queryParams = new URLSearchParams(window.location.search);
    if(queryParams.get('guest')==='true'?true:false){
        ReactSession.set("guest", "true");
    }
    const loged = (queryParams.get('guest')==='true'?true:(ReactSession.get("guest")==='true'?true:false))
    return (
        <section className="header">            
            <a href="/#" className="logo"><ImSpoonKnife class='ic'/>Restaurent</a>
            
            <nav className={menu===1?'active '+"navbar":'deactive '+"navbar"}>
                <a href="/#">Home</a>
                <a href="/#about">About</a>
                <a href="/#foods">Foods</a>
                <a href="/#gallery">Gallery</a>
                <a href="/#menu">Menu</a>
                <a href="/order">Order</a>
                <a href={!loged?"/sign":"/account"}>{!loged?"Log in":'Account'}</a>
                {loged?<a onClick={()=>{ReactSession.set("guest", "");window.location.href="/"}}><RiShutDownLine/></a>:''}

                
            </nav>
            
            
            
            <div id="menu-btn" className="menu-btn">
                <HiMenu onClick={()=>{setMenu(1)}} className={menu===0?'show':'hide'}/>
                <ImCross onClick={()=>{setMenu(0)}} className={menu===1?'show':'hide'}/>
            </div>
        </section>
    )
}

export default Header
