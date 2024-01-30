/* eslint-disable no-undef */
import "../../styles/midshop.css"
import '../../styles/shopComp.css'
import { useState } from "react"

function MidShop() {
   return  (
    
        <div className="maine">
           {prices.map((price) => {
            const [add,setAdd] = useState(0)

            return (
            <>
              <div className="mainComp">
              <div className="picComp">
                  <img className='bottle' src={price.img} alt={price.name} />
              </div>
              <div className="priceComp">
                  <p className="nameComp">{price.name}</p>
                  <p className="pricetagComp">{price.price},00</p>
              </div>
              <div className='cart'>
                  <p className='addCart'>Add To Cart</p>
                  <div className='addUnadd'>
                  <button onClick={() => add === 0 ? setAdd(0) : setAdd(add-1)}>-</button>
                  <p>{add}</p>
                  <button onClick={() =>  setAdd(add+1)}>+</button>
                  </div>
              </div>
        
          </div>
          </>
    )    
    })}
        </div>
        
        )
}

const prices = [
    {
        name: "London Dry Gin",
        price: 2450,
        img: require('../../assets/images/croppedshop2tales/square/2Tales London dry Gin.jpg'),
    },
    {
        name: "Pink Gin",
        price: 2550,
        img: require('../../assets/images/croppedshop2tales/square/2Tales Pink Gin.jpg'),
    },
    {
        name: "Ginger Gin",
        price: 3250,
        img: require('../../assets/images/croppedshop2tales/square/2Tales Ginger Gin.jpg'),
    },
    {
        name: "Coffee Gin",
        price: 3250,
        img: require('../../assets/images/croppedshop2tales/square/2Tales Coffe Gin.jpg'),
    },
    {
        name: "Vodka",
        price: 1850,
        img: require('../../assets/images/croppedshop2tales/square/2Tales Vodka na beloj.jpg')
    }
]

export default MidShop