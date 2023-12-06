import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import bluLogo from "../../assets/bluelogo.png"
function MidGallery() {

    const images = [
        "https://2tales.rs/wp-content/uploads/2021/12/slajd_07.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/pink-gin-1.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/coffee-gin-1.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/slajd_08.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/slajd_05.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/london-dry-gin.jpg"
    ]
    return (
        <>
        <div className="mainPic">
            <img className="BluLogo" src={bluLogo} alt="Blue Logo" width="600px" />
        </div>
        <div className="galleryGal">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                    {images.map((image,i) => (

                   
                        <img 
                        src={image}
                        width="200px"
                        className="imag"
                        style={{width: "100%", display: "block"}}
                        key={i}
                        alt=""
                        />
                        ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </>
    )
}

export default MidGallery