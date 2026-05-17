import { Card, Button, ButtonGroup } from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function CardListHorizontal({ data = [], isCheckout = false }) {
  const {
    changeQty,
    deleteAll,
    deleteItem,
    getTotalPrice,
    getAppFee,
    getTotalPayment,
    setModal
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handlePayment = () => {
    deleteAll();
    setModal(true)
    navigate("/")
  };

  return (
    <>
      <Card className="m-10" style={{background:"white"}}>
        <div className="mb-4 flex justify-between items-center">
          <h5 className="text-xl font-bold">
            {isCheckout ? "Checkout" : "Keranjang Saya"}
          </h5>

          {!isCheckout && data.length > 0 && (
            <p
              className="text-sm text-red-600 cursor-pointer hover:underline"
              onClick={deleteAll}
            >
              Hapus semua
            </p>
          )}
        </div>

        <hr />

        {/* LIST BARANG */}
        <ul className="divide-y">
          {data.map((item) => (
            <li key={item.id} className="py-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">X{item.qty}</p>
                  </div>
                </div>

                <div className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>

              {!isCheckout && (
                <div className="flex justify-end mt-3 items-center">
                  <ButtonGroup>
                    <Button onClick={() => changeQty(item.id, "-")}>
                      <FaMinus />
                    </Button>
                    <Button color="white">{item.qty}</Button>
                    <Button onClick={() => changeQty(item.id, "+")}>
                      <FaPlus />
                    </Button>
                  </ButtonGroup>

                  <FaTrash
                    className="ms-3 text-red-500 cursor-pointer"
                    onClick={() => deleteItem(item.id)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        {isCheckout && data.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Total Harga Produk</span>
              <span>${getTotalPrice()}</span>
            </div>

            <div className="flex justify-between">
              <span>Biaya Aplikasi</span>
              <span>${getAppFee()}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total Harga Bayar</span>
              <span>${getTotalPayment()}</span>
            </div>

            <div className="flex justify-end mt-4">
              <Button color="green" onClick={handlePayment}>
                Selesaikan Pembayaran
              </Button>
            </div>
          </div>
        )}

        {!isCheckout && data.length > 0 && (
          <div className="flex justify-end mt-6">
            <Button color="green" as={Link} to="/checkout">
              Checkout
            </Button>
          </div>
        )}
      </Card>
    </>
  );
}