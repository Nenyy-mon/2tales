import { NavLink, Outlet } from "react-router-dom"
import '../../styles/navshop.css'
import logo from '../../assets/apple-touch-icon.png'
import cart from '../../assets/cart.png'
import { useState } from "react";
function NavShop() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleBurgerClick = () => {
      setMenuOpen(!isMenuOpen);
    };
    return (
        <>
         <div id="burger-menus"  className={isMenuOpen ? 'close' : ''} onClick={handleBurgerClick} >
                <span></span>
            </div>
        <div className="nav-shop">
            <div className="logopic">
                <img src={logo} alt="logo" width="100px" className="pic" />
            </div>
            <div className={!isMenuOpen ? 'menus' : 'links'}>
            <ul  className="menu-navbars">
                       <li  ><NavLink className='colored' to='/2tales/'>GO BACK</NavLink></li>
                       <li>  <NavLink  className='colored'  to='/2tales/shop'>SHOP</NavLink></li>
                       <li > <NavLink className='colored cartes' to='/2tales/cart'><img src={cart} alt="" className="cart" width="30px" /><p className="carted">0</p></NavLink></li>
                      
                       
                        <Outlet/>
                    </ul>
                <div className="language-navbar">
                <p  className="language-p colored">
                    <span className='srb active'>SRB</span>
                    /
                    <span className='en'>ENG</span>
                </p>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default NavShop