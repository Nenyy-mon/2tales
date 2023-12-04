import { Outlet, NavLink } from "react-router-dom";
import './styles/navbar.css'
import logo from "./assets/Asset 1.png"
import { useEffect, useState } from 'react';
function Navbar() {
    const [classN, setClassN] = useState('nav-bar');
    


    
  
    useEffect(() => {
        console.log(scrollY)
  
          const onScrollit = () => {
            if (window.scrollY > 50) {
              setClassN('scrolled');
            } else {
              setClassN('nav-bar');
            }
          };
          
          document.addEventListener('scroll', onScrollit);
          // Cleanup the event listener when the component unmounts
          return () => {
            document.removeEventListener('scroll', onScrollit);
          };
        }, []);
  
    return (
        <nav className={classN}>
            <div className="navbar" >
                <div className="logo-navbar">
                    <img width="150" src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul  className="menu-navbar">
                       <li><NavLink to="/">HOME</NavLink></li>
                       <li><NavLink to="/gallery">GALLERY</NavLink></li>
                       <li><NavLink to="/shop">SHOP</NavLink></li>
                       <li><NavLink to="/about">ABOUT US</NavLink></li>
                       <li><NavLink to="/contact">CONTACT</NavLink></li>
                        <Outlet/>
                    </ul>
                </div>
            </div>
            <div className="language-navbar">
                <p className="language-p">
                    <span className='srb active'>SRB</span>
                    /
                    <span className='en'>ENG</span>
                </p>
            </div>
        </nav>
    )
}

export default Navbar