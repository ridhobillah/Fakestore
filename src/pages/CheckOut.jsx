
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import CardListHorizontal from "../components/CardListHorizontal";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <div>
      <CardListHorizontal data={cart} isCheckout />
    </div>
  );
}