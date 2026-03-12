import { useContext } from "react";
import { CartContext } from "../CartContext";

const API_URL = import.meta.env.VITE_API_URL || "";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>My Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div>
      <h1>My Cart</h1>
      <button onClick={clearCart}>Clear Cart</button>
      <div className="cart-list">
        {cartItems.map((item, idx) => (
          <div key={idx} className="cart-item">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.name}
                width="80"
              />
            )}
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: {total}</h3>
    </div>
  );
}
export default Cart;
