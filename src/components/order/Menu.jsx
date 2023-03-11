import React,{useState} from 'react'
import './menu.css'

import {ImCross} from 'react-icons/im'
import {HiMenu} from 'react-icons/hi'

let items = [];
const foods = ["Breakfast","Lunch","Dinner","Burger","Coffee","Juice","Fast Moving","Desserts","Juice","Juice","Juice"];

for(let i = 0;i<foods.length;i++){
    let id="item"+i;
    items.push(  
        <div className="item">
            <input type="radio" name="item" value="Item" id={id} defaultChecked={id==="item0"?"defaultChecked":""}/>
            <label for={id}>{foods[i]}</label>
        </div>         
    );
}



const Menu =({active,setActive}) => {
    return (
            
            <div class={active?"menu__container "+'active':"menu__container "+'deactive'}>
                <div className="head">
                    
                    
                    <ImCross onClick={()=>{setActive(false)}} className={active?'show':'hide'}/>
                    <h2>Menu</h2>
                </div>
                <div className="el">
                    {items.map((el)=>
                        el
                    )                 
                    }
                </div>
            </div>
    )
}

export function mm(){
    
}

export default Menu
