import { useState } from 'react'
import '../../styles/shopComp.css'
function ShopComponent({price}) {
const [add,setAdd] = useState(0)


console.log(price)
    return (
        <>
            <div className="mainComp">
            <div className="picComp">
            </div>
            <div className="priceComp">
                <p className="nameComp">London Dry Gin</p>
                <p className="pricetagComp">2.650,00</p>
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
}

export default ShopComponent