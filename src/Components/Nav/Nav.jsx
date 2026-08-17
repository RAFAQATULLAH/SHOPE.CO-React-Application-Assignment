import Logo from "../../assets/SHOP.CO.png"
import { ShoppingCartIcon , User } from "lucide-react"
import "./Nav.css"

function Nav(){

   return (
   <>
    <div id="navbar">
        <div className="navitems">
        <div className="logo">
            <img src={Logo} alt="LOGO" />
        </div>
        <div className="navlinks">
            <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">On Sale</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Brands</a></li>
            </ul>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Search for products" />
        </div>
        <div className="btn">
            <div className="cart">
                <ShoppingCartIcon/>
            </div>
            <div className="user">
                <User/>
            </div>
        </div>
        </div>
    </div>
    </>
   )
}

export default Nav;