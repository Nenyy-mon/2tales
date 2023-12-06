import Footer from "../Footer"
import Navbar from "../Navbar"
import "../styles/gallery.css"
import MidGallery from "./pagOFpag/MidGallery"

function Gallery() {
    return (
        <div className="mainGall">
        <Navbar/>
        <MidGallery/>
        <Footer/>
        </div>
    )
}

export default Gallery