import Logo from "../../assets/SHOP.CO.png"
import { ShoppingCartIcon , User , Menu , Search} from "lucide-react"
import "./Nav.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
<<<<<<< HEAD

function Nav(){
const navigate = useNavigate();
=======
import { useSelector } from "react-redux";

function Nav(){
const navigate = useNavigate();
const { user } = useSelector((state) => state.auth);

>>>>>>> de2a868 (Made backend and update cart and profile)
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
                    
                    <select name="shop" id="shop" defaultValue="" onChange={(e) => navigate(e.target.value)}>
                        <option value="/" >Shop</option>
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
<<<<<<< HEAD
            <div className="user">
                <User/>
            </div>
=======
            <Link to={user?"/profile":"/login"} >
             <div className="user">
                <User/>
            </div>
            </Link>
>>>>>>> de2a868 (Made backend and update cart and profile)
        </div>
        </div>
    </div>
    </>
   )
}

export default Nav;