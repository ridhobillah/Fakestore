import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import CartProvider from "./contexts/CartContext";

export default function Template() {
  return (
    <>
      <CartProvider>
            <NavbarComp />
            {/* */}
            <Outlet /> {/* kalo di laravel yeild */}
      </CartProvider>
    </>
  );
}
