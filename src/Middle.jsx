import { useEffect, useState } from "react";
import "./styles/middle.css"
import Scrolling from "./Pages/Scrolling";
// import Tabs from "./Tabs";
import wave1 from "../src/assets/waves/Ellipse 1.svg"
import wave2 from "../src/assets/waves/Ellipse 2.svg"
import wave3 from "../src/assets/waves/Ellipse 2 Copy.svg"
import wave4 from "../src/assets/waves/Rectangle 2.svg"
function Middle() {
    // eslint-disable-next-line no-unused-vars
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      const elements = document.querySelector(".wav");
      if (elements) {
        elements.classList.add("useAnimate");
        setScrollY(window.scrollY);
      }
    
    const elementi = document.querySelector(".waveTwo");
    if (elementi) {
        elementi.classList.add("useAnimate1");
      setScrollY(window.scrollY);
    }
  
  const elemento = document.querySelector(".waveThree");
    if (elemento) {
        elemento.classList.add("useAnimate2");
      setScrollY(window.scrollY);
    }
    const elementsi = document.querySelector(".waveFour");
    if (elementsi) {
        elementsi.classList.add("useAnimate3");
      setScrollY(window.scrollY);
    }
}


    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      
        <div className="all">
        <div className="bottle-image">
            <div className="text"><p>
            2Tales gin is handcrafted in a small batches. 
            Distilled in a traditional copper pot still. 
            We use juniper berries and 2 other ingredients
            from the Serbian mountains, while we take the
            other six botanicals from all over the world.
            </p>
           
            </div>  
            <div className="svgs">
                <img onScroll={handleScroll}  className="waveOne wav" src={wave1} alt="wave" />
                <img onScroll={handleScroll}  className="waveTwo wav" src={wave2} alt="wave" />
                <img onScroll={handleScroll}  className="waveThree wav" src={wave3} alt="wave" />
                <img  onScroll={handleScroll} className="waveFour wav" src={wave4} alt="wave" />
             </div>
        </div>
        <Scrolling/>
        </div>
    )
}

export default Middle