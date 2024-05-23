import { useEffect, useState } from "react"
import Footer from "../../../Footer"
import Navbar from "../../../Navbar"
import "../../../styles/gallery.css"
import MidGallery from "./MidGallery"
import LoadingScreen from "../../LoadingPractice/LoadingScreen"
import { useNavigate } from "react-router-dom"

function Gallery() {
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        if (document.readyState == 'complete') {
            setTimeout(() => {
                setIsLoading(false)
            },1000)
        }
        const entries = performance.getEntriesByType("navigation");
        entries.forEach((entry) => {
          if (entry.type === "reload") {
            console.log(`${entry.name} was reloaded!`);
            if (entry.name == window.location.href) {
             setIsLoading(false)
            }
          }
        });
      },[])
      
      if (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
      navigate('/2tales/')
    return (
        <div className="mainGall">
        <Navbar/>
        <MidGallery/>
        <Footer/>
        </div>
    )
}

export default Gallery
