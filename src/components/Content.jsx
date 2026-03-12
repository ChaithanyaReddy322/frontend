import { useEffect, useState } from "react";

export default function Content() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-1-xo59.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {error && <p style={{ color: "red" }}>Error loading products: {error}</p>}
      {products.length === 0 && !error && <p>Loading products...</p>}
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