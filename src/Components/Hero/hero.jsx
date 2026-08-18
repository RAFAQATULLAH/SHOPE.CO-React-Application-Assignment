import "./hero.css"
import Pimg from "../../assets/Line 9.png"
import Button from "../button/button"
import Heroimg from "../../assets/heroimg.jpg"


function Hero(){
    return (
        <>
        <div className="hero">
            <div className="heroitems">
                <div className="sec1">
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                
                <div className="shopnowbtn">
                    <Button text="Shop Now"/>
                </div>
                <div className="performence">
                    <div className="p1">
                        <h2>200+</h2>
                        <p>International Brands</p>
                    </div>
                    <img src={Pimg} alt="Line" />
                    <div className="p2">
                        <h2>2,000+</h2>
                        <p>High-Quality Products</p>
                    </div>
                    <img src={Pimg} alt="Line" />
                    <div className="p3">
                        <h2>30,000+</h2>
                        <p>Happy Customers</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="sec2">
                <img src={Heroimg} alt="Hero Img" />
            </div>
        </div>
        </>
    )
}
export default Hero;