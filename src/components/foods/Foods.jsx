import React from 'react'
import './foods.css'
import FoodImage1 from '../../assests/foods-dish-1.jpg'
import FoodImage2 from '../../assests/foods-dish-2.jpg'
import FoodImage3 from '../../assests/foods-dish-3.jpg'
import FoodImage4 from '../../assests/foods-dish-4.jpg'
import FoodImage5 from '../../assests/foods-dish-5.jpg'

const food = [
    {image:FoodImage1,name:'Mixed Rice',price:'RS.800'},
    {image:FoodImage2,name:'Egg rice',price:'RS.600'},
    {image:FoodImage3,name:'BBQ 1',price:'RS.800'},
    {image:FoodImage4,name:'BBQ 2',price:'RS.800'},
    {image:FoodImage5,name:'Chicken Sausage Meat With Nai Miris',price:'RS.2800'},
]
const Foods = () => {
    return (
        <section className="foods" id="foods">
            <div className="title">
                <h6>Popular Dishes</h6>
                <h2>Our Delicious Food</h2>
            </div>
            <div className="slider">
                {
                    food.map((el)=>
                    <div className="slide">
                    <div className="slide__image">
                        <img src={el['image']} alt=""/>
                    </div>
                    <div className="name">
                        {el['name'].length>30?el['name'].substring(0,30).trim()+"...":el['name']}
                    </div>
                    <div className="price">
                        {el['price']}
                    </div>                    
                    </div>
                    )
                }
                
            </div>
        </section>
    )
}

export default Foods
