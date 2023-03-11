import React,{useState } from 'react'
import './cart.css'

import {RiDeleteBin6Fill} from 'react-icons/ri'

const cartItemsin = [
    {
        id:0,
        name:'Chocolate Milkshake with Oreo',
        option:'Option1',
        addons:['addon1', 'addon2','addon3'],
        price:400
    },
    {
        id:1,
        name:'Chocolate Milkshake with Oreo',
        option:'Option1',
        addons:['addon1', 'addon2','addon3'],
        price:400
    },
    {
        id:2,
        name:'Chocolate Milkshake with Oreo',
        option:'Option1',
        addons:['addon1', 'addon2','addon3'],
        price:400
    }
]
const Cart = () => {
    const [cartItems,setCartItems] = useState(cartItemsin)
    const cartIdCheck = {};
    cartItems.map((el)=>cartIdCheck[el['id']]=true);
    const [cartCheck,setCartCheck] = useState([cartIdCheck,0]);

    const subtotal = ()=>{
        var tot = 0;
        cartItems.forEach((item)=>{
            if(cartCheck[0][item['id']]){
                tot = tot+item['price']
            }
        })
        if(tot>0){
            return [tot,tot+200]
        }else{
            return [ 0,0]
        }
        
    }

    return (
        <section className="cart__container">
            <div className="mycart">
                <div className="cart__list">
                    <h3>Food cart ({cartItems.length})</h3>
{/* ======================   SELECT ALL BUTTON  =========================== */}
                    <input type="button" value="Select all"
                        onClick={()=>{
                            const tempCartCheck = cartCheck;
                            Object.keys(tempCartCheck[0]).forEach(key => {
                                tempCartCheck[0][key]=true;
                              });
                            setCartCheck([tempCartCheck[0],0])
                        }}
                    />
                    <input type="button" value="Select inverse"
                    
                        onClick={()=>{
                            const tempCartCheck = cartCheck;
                            Object.keys(tempCartCheck[0]).forEach(key => {
                                tempCartCheck[0][key]=!tempCartCheck[0][key];
                            });
                            setCartCheck([tempCartCheck[0],0]) 
                        }}
                    />
                    <div className="food__items">

{/* ==========================   ITEMS  ============================ */}
                        {
                            cartItems.map((el)=>
                                <div className="elc">
                                    <input type="checkbox" name="" className="check" id={'item'+el['id']} checked={cartCheck[0][el['id']]}/>                        
                                    <label className="el" htmlFor={'item'+el['id']}
                                        onClick={()=>{
                                            const tempCartCheck = cartCheck;
                                            tempCartCheck[0][el['id']]=!tempCartCheck[0][el['id']]
                                            setCartCheck([tempCartCheck[0],0])                                           
                                            
                                    }}>
                                        <div>
                                            <h3 onClick={(e)=>{e.stopPropagation();window.location.href="/buy"}}>{el['name']}</h3>
                                            <h6>
                                                {el['option']}
                                                {el['addons'].map((eli)=>', '+eli)}
                                            </h6>
                                        </div>
                                        <h2>
                                            RS.{el['price']}
                                        </h2>
{/* =========================  DELETE ITEM  =========================== */}
                                        <RiDeleteBin6Fill className="delete" onClick={
                                            (event)=>{
                                                event.stopPropagation();
                                                event.preventDefault();
                                                const tempCartItems = [];
                                                cartItems.forEach(item=>{
                                                    if(!(item['id']===el['id'])){
                                                        tempCartItems.push(item)
                                                    }
                                                })
                                                setCartItems(tempCartItems)
                                            }
                                            }/>
                                    </label>
                                </div>
                            )
                        }
                        

                    </div>
                </div>

{/* ===================  ORDER SUMMERY  ========================= */}
                <div className="order__summery">
                    <h2>Order summery</h2>
                    <div className="subtotal">
                        <h3>Subtotal</h3>
                        <h4>RS.{subtotal()[0]}</h4>
                    </div>
                    <div className="delevery">
                        <h3>delevery fee</h3>
                        <h4>RS.200</h4>
                    </div>
                    <div className="est__total">
                        <h3>estimated total</h3>
                        <h4>RS.{subtotal()[1]}</h4>
                    </div>
                    <input type="button" className="checkoutBtn" value="CHECKOUT"/>

                </div>
            </div>
        </section>
    )
}

export default Cart
