import { useContext } from "react";
import CardListHorizontal from "../components/CardListHorizontal";
import { CartContext } from "../contexts/CartContext"

export default function Cart() {
    const {cart, changeQty} = useContext(CartContext);
    return (
        <div>
            <CardListHorizontal data={cart} />
        </div>
    )
}