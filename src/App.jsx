import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div>
      {/* global cart state lives in context */}
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Content />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;
