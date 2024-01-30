import Footer from "../Footer"
import NavShop from "./Shop/NavShop.jsx"
import MidShop from "./pagOFpag/MidShop.jsx"
import "../styles/midshop.css"
import NewShop from "./pagOFpag/NewShop.jsx"
import ComponentSelf from "./pagOFpag/ComponentSelf.jsx"
function Shop() {

   return (
        <div className="main-shop">
            <NavShop/>
            <NewShop/>
            <MidShop />
            <ComponentSelf/>
            <Footer/>
        </div>
    )
}

export default Shop