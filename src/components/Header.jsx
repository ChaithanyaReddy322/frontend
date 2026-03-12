import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const count = cartItems.length;

  return (
    <div className="App-Header">
      <h1>My Store</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart {count > 0 && `(${count})`}</Link>
        </li>
        <li>
          <Link to="/orders">Order</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
