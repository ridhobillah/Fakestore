import { useEffect, useState } from "react";
import BannerComp from "./components/BannerComp";
import CardList from "./components/CardList";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import ModalSuccess from "./components/ModalSuccess";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {modal, handleClose} = useContext(CartContext)

  async function getData() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setCategories(result.slice(0, 4));
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProducts(result.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Spinner aria-label="Default status example" />
        Sedang mengambil data......
      </div>
    );
  }

  return (
    <>
      <BannerComp />
      <CardList data={categories} type="category" />
      <CardList data={products} type="product">
        <div className="flex justify-between mb-5 mt-8">
          <h5 className="text-xl font-bold">Daftar Produk Populer</h5>
          <Link to="/products">
            <Button color="blue">Lihat Selengkapnya</Button>
          </Link>
        </div>
      </CardList>
     <ModalSuccess open={modal} onClose={handleClose}/>
    </>
  );
}

export default App;
