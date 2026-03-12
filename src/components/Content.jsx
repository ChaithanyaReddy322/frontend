import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../CartContext";
import "./Content.css"

const API_URL = import.meta.env.VITE_API_URL || "";

if (!API_URL) {
  console.warn("VITE_API_URL is not defined; API requests will fail");
}

function Content() {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const fetchProducts = async () => {
    const url = `${API_URL}/store`;
    const res = await axios.get(url);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
     
      {/* <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <hr /> */}
      <div className="row">
        {products.map((product) => (
          <div className="box" key={product.id}>
            <img src={`${API_URL}${product.imageUrl}`} width="300px" alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
