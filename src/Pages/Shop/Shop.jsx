import Footer from "../../Footer.jsx"
import NavShop from "./NavShop.jsx"
import MidShop from "../Shop/MidShop.jsx"
import "../../styles/midshop.css"
import NewShop from "../Shop/NewShop.jsx"
function Shop() {

   return (
        <div className="main-shop">
            <NavShop/>
            <NewShop/>
            <MidShop />
            <Footer/>
        </div>
    )
}

export default Shop