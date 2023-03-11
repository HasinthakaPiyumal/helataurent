import React,{useState} from 'react'
import './checkout.css'

import FoodImage2 from '../../assests/foods-dish-2.jpg'


const Checkout = () => {
    const [quantity,setQuantity] = useState(0);
    return (
        <section className="checkout__container">
            <div className="checkout__card">
                <div className="image__section">
                    <img src={FoodImage2} alt=""/>
                </div>
                <div className="option__section">
                    <h2>Chocolate Milkshake with Oreo</h2>
                    <h6>Delicious Chocolate milkshake mixed with Oreo Biscuit chips</h6>
                    <form>
                    <h3>Options *</h3> 
                        <div className="option">  
                                                 
                            <input type="radio" name="option" value="option1" id="option1" defaultChecked/>
                            <label htmlFor="option1">Option1</label>
                            <input type="radio" name="option" value="option2" id="option2"/>
                            <label htmlFor="option2">Option2</label>
                            <input type="radio" name="option" value="option3" id="option3"/>
                            <label htmlFor="option3">Option3</label>
                            <input type="radio" name="option" value="option4" id="option4"/>
                            <label htmlFor="option4">Option4</label>
                        </div>
                        <h3>Addons</h3>    
                        <div className="addons">  
                                              
                            <input type="checkbox" name="addons" value="addons1" id="addons1"/>
                            <label htmlFor="addons1">addons1</label>
                            <input type="checkbox" name="addons" value="addons2" id="addons2"/>
                            <label htmlFor="addons2">addons2</label>
                            <input type="checkbox" name="addons" value="addons3" id="addons3"/>
                            <label htmlFor="addons3">addons3</label>
                            <input type="checkbox" name="addons" value="addons4" id="addons4"/>
                            <label htmlFor="addons4">addons4</label>
                        </div>
                        <h3>Special Instruction</h3>
                        <textarea placeholder="add a note" name="note" id="" rows="2"></textarea>
                        <div className="quantity">
                            <div className="dec" onClick={()=>{quantity>0?setQuantity(quantity-1):setQuantity(0)}}><div className="ic"></div></div>
                            <input type="number" name="quantity" id="quantity" min={0} value={quantity}/>
                            <div className="inc" onClick={()=>{setQuantity(quantity+1)}}><div className="ic"></div><div className="ic"></div></div>
                        </div>
                        <div className="buttons">
                            <input type="button" onClick={()=>{window.location.href="/cart"}} value="Buy Now"/>
                            <input type="button" value="Add to cart"/>

                        </div>
                        
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Checkout
