import {
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import imageLogo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";


export default function NavbarComp() {

  const { isLogin, logout} = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  const {cart} = useContext(CartContext);

    return (
        <Navbar rounded className="px-10 py-5">
      <NavbarBrand href="/">
        <img src={imageLogo} className="mr-3 h-6 sm:h-9"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DOWWW'S Store</span>
      </NavbarBrand>
      <div className="flex md:order-2 items-center gap-3">


        <Link to="/cart" style={{position:"relative"}}>
        <span className="bg-red-200 text-red-500 font-bold justify-center flex items-center " style={{height:"25px",width:"25px",position:"absolute", right:"15px", bottom:"10px", borderRadius:"50%"}}>{cart.length}</span>
        <FaShoppingCart className="text-2xl dark:text-white"/>
        </Link>
        {
          isLogin && (<Button color="red" className="ms-3" onClick={handleLogout}>Logout</Button>)
        }



        <Link to="/profile">
            <img src="https://i.imgur.com/LDOO4Qs.jpg" className="mr-3 h-6 sm:h-9 rounded-full" alt="Profile" />
        </Link>
      </div>
    </Navbar>
        
    )
}