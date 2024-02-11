import { Link } from "react-router-dom";
import { MainContext } from "../utils/ProjectContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [state] = useContext(MainContext);
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://dynamic.brandcrowd.com/asset/logo/8580bd8e-3f85-4e81-81ce-7a90eda3134e/logo-search-grid-1x?logoTemplateVersion=1&v=637654815057170000" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{state.name}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/grocery">Cart {cartItems.length}</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
