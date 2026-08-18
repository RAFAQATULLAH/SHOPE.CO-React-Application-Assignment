import Logo from "../../assets/SHOP.CO.png"
import { ShoppingCartIcon , User , Menu , Search} from "lucide-react"
import "./Nav.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav(){
const navigate = useNavigate();
   return (
   <>
    <div id="navbar">
        <div className="navitems">
            <span className="menu">
                <Menu/>
            </span>
        <div className="logo">
            <img src={Logo} alt="LOGO" />
        </div>
        <div className="navlinks">

            <ul>
                <li>
                    
                    <select name="shop" id="shop" defaultValue="Shop" onChange={(e) => navigate(e.target.value)}>
                        <option value="shop" >Shop</option>
                        <option value="/Category">
                          Category  
                        </option>
                        </select>
                </li>
                <li><a href="#">On Sale</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Brands</a></li>
            </ul>
        </div>
        <span className="searchicon">
                <Search/>
            </span>
        <div className="searchbar">
            
            <input type="text" placeholder="Search for products" />
            
        </div>
        <div className="btn">
            <Link to="/cart/">
            <div className="cart" >
                <ShoppingCartIcon/>
            </div>
            </Link>
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