  import CardComp from "./CardComp";
  import CardCommerce from "./CardCommerce";
  import { useContext, useState } from "react";
  import ModalCardComp from "./ModalCardComp";
  import { CartContext } from "../contexts/CartContext";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../contexts/AuthContext";
 

  export default function CardList({data, type, children}) {
    const [openModal, setOpenModal] = useState(false); 
    const { addToCart } = useContext(CartContext);

    const [selected, setSelected] = useState({});

    function updateSelected(item) {
      setSelected(item);
      setOpenModal(true);
    }

    function handleClose() {
      setOpenModal(false);
    }

    const navigate = useNavigate();
    const { isLogin } = useContext(AuthContext);  
    function handleBtnKeranjang(product, qty) {
      if (!isLogin) {
        navigate("/login");
      }
      addToCart(product,qty);
      setOpenModal(false)
    }

      return (
        <>
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            {children}
            <div className="grid grid-cols-4 gap-4">
              {
                  data.map((item, index) => type == "category" ? (<CardComp key={index} item={item} />) : (<CardCommerce key={index} item={item} 
                  updateSelected={updateSelected} />))
              }
            </div>
          </div>
          <ModalCardComp item={selected} handleClose={handleClose} openModal={openModal} handleBtnKeranjang={handleBtnKeranjang}/>  
          </> 


      )
  }