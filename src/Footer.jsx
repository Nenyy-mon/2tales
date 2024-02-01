import "./styles/footer.css"
import logo from "./assets/Asset 1.png"
import image from './assets/arrow-up.png'
function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className="footer">
           
            <div className="upper-footer">
                <img width="80" src={logo} alt="" className="logo-footer" />
            </div>
            <div className="down-footer">
                <div className="contact-div">
                <h2 className="contact-head">CONTACT US:</h2><br/><br/>
                <p className="contact-p">
                Phone: <a  className=" linked" href="tel:+381 612222397">+381 612222<span className="num">3</span>97</a> <br/>
                Phone: <a className=" linked" href="tel:+381 612222497">+381 612222<span className="num">4</span>97</a> <br/>
                Email: <a className=" linked" href="mailto:office@2tales.rs">office@<span className="num">2tales</span>.rs</a> <br/>
                Follow us on: <br/><br/>
                <a className="aig"  href="https://www.instagram.com/2tales_spirits/" target="_blank" rel="noreferrer"><img src="./src/assets/instagram.png" alt="Instagram" width="20px" /></a>
                <a className="afa" target="_blank" href="https://www.facebook.com/profile.php?id=100069385623493" rel="noreferrer"><img src="./src/assets/facebook.png" alt="Facebook" width="20px" /></a>
                </p>
                </div>
                <div className="about-div">
                <h2 className="about-head">About US:</h2><br/><br/><br/><br/>
                <p className="about-p">2Tales is a small craft distillery with big ideas located in <span className="city">Belgrade</span>.</p>
                </div>
                <div className="sndmsg-div">
                <h2 className="sndmsg-head">Send us a message:</h2>
                <form action="">
                    <label htmlFor="name">Name<span className="req">*</span><br/>
                        <input placeholder="Name" id="name" type="text" required  />
                    </label>
                    <label htmlFor="email">E-mail<span className="req">*</span><br/>
                        <input placeholder="Email" id="email" type="email" required />
                    </label>
                    
                    <label htmlFor="message">Message<span className="req">*</span><br/>
                        <textarea placeholder="Message" id="message"  cols={22} rows={3} required ></textarea>
                    </label>
                    <button className="btn" type="submit">Send</button>
                </form>
                </div>
            </div>
            <button onClick={ scrollToTop}  className="up"><img src={image} alt="arrowUp" width="30px" className="arrow" /></button>
        </div>
    )
}


export default Footer