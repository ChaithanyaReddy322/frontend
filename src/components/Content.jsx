import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/store/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            width: "200px",
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />

          <h3>{product.name}</h3>

          <p>{product.desc}</p>

          <p>{product.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}