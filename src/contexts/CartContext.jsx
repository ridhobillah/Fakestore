import { useState, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  function addToCart(product, qty) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id == product.id);
      if (exist) {
        return prev.map((item) =>
          item.id == product.id ? { ...item, qty: item.qty + qty } : item,
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            image: product.images ? product.images[0] : "",
            price: product.price,
            qty: qty,
          },
        ];
      }
    });
  }

  function changeQty(productId, type) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id == productId) {
          if (type == "+") {
            return { ...item, qty: item.qty + 1 };
          } else {
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            }
            return item;
          }
        } else {
          return item;
        }
      }),
    );
  }

  function deleteAll() {
    setCart([]);
  }

  function deleteItem(productId) {
    setCart((prev) => prev.filter((item) => item.id != productId));
  }











  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  const appFeeFlat = 43.23;
  function getAppFee() {
    return appFeeFlat;
  }

  function getTotalPayment() {
    return getTotalPrice() + getAppFee();
  }

  function showModal() {
    setModal(true);
  }

  function handleClose() {
    navigate("/");
    setModal(false);
    deleteAll();
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQty,
        deleteAll,
        deleteItem,
        getTotalPrice,
        getAppFee,
        getTotalPayment,
        modal ,setModal, handleClose
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
