import "../../styles/componentSelf.css"
import pic from '../../assets/images/croppedshop2tales/square/2Tales London dry Gin.jpg'
function ComponentSelf() {
    return (
        <div className="componentMain">
            <div className="compLeft">
                <img className="pice" src={pic} alt="" width={300} />
            </div>
            <div className="compRight">
                <h1 className="nameSelf">London Dry Gin</h1>
                <p className="price">3250,00 RSD</p>
                <p className="description">Our debutant London dry gin is a perfect combination of 9 different plants and spices. <br />The spotlight in taste is on Juniper berries from the Tara mountain and the root of Angelica, followed by Lavender flowers, lemon and orange skin aromas.<br /><br />
                The harmonious combination of other spices emphasizes the sensation of freshness and raises the balance of flavors to a higher level.<br /> Smooth body of gin is a product of exhaustive distillation that also preserves the essential oils, being the key to the uniqueness of the taste of this classic.<br /><br />
                Apart from being the perfect base for numerous cocktails such as the famous Martini and Gin fizz, many prefer to drink it “pure” with a slice of lime or mixed with tonic.
Cheers!</p>
                <div className="CartBut">
                    <div className="add-Cart">
                        <button className="plus">+</button>
                        <p>count</p>
                        <button className="minus">-</button>
                    </div>
                    <button className="carteds">ADD TO CART</button>
                </div>
                <div className="tags">
                    <p><span></span></p>
                    <p><span></span></p>
                </div>
                </div>            
        </div>
    )
}

export default ComponentSelf