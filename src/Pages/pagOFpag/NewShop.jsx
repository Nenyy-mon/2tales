/* eslint-disable no-undef */
import '../../styles/shopComp.css'
import '../../styles/midshop.css'
function NewShop() {
    return(
        <div className="maines">
        <h1>New in our shop</h1>
        <div className='bottles'>
        {maliK.map((maliK) => {
            return (
            <>
              <div className="mainComp">
              <div className="picComp">
                  <img className='bottle imgs'  src={maliK.img} alt={maliK.name} />
              </div>
              <div className="priceComp">
                  <p className="nameComp">{maliK.name}</p>
                  <p className="pricetagComp">{maliK.price},00</p>
              </div>
              <div className='carte'>
                  <p className='addCart'>Add To Cart</p>
                  <div className='addUnadd'>
                  <button >-</button>
                  <p></p>
                  <button>+</button>
                  </div>
              </div>
        
          </div>
          </>
    )    
    })}
    </div>
        </div>
    )
}
const maliK = [
    {
        name: "Mali kazan Alas",
        price: 2450,
        img: require('../../assets/images/croppedshop2tales/square/Mali kazan Alas.jpg'),
    },
    {
        name: "Mali kazan Omaja",
        price: 2550,
        img: require('../../assets/images/croppedshop2tales/square/Mali kazan Omaja.jpg'),
    },
]
   
export default NewShop