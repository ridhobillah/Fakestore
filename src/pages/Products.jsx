import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react"
import CardList from "../components/CardList";
import SearchComp from "../components/SearchComp";
import DropdownComp from "../components/DropdownComp";
import PaginationComp from "../components/PaginationComp";

export default function Products() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
    setCurrentPage(page);
    getProducts();
    };


    function processSearch(event) {
        setSearch(event.target.value);
        let url = "https://api.escuelajs.co/api/v1/products" + "?title=" + search;
        setLoading(true);
        getProducts(url);
    }

    async function getProducts(url = "https://api.escuelajs.co/api/v1/products" + "?limit=8" + "&offset=" + currentPage) {
        try {
           const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
    
            const result = await response.json();
            setProducts(result);
            setLoading(false);
            } catch(error) {
          console.error(error.message);
        }
      }
    
      function processSort(type) {
        //console.log(type);
        let productNew = [...products];
        if (type == "harga termurah") {
            productNew.sort(function(a, b){return a.price - b.price});
      } else if(type == "harga termahal") {
            productNew.sort(function(a, b){return b.price - a.price});
      } else if(type == "alfabet menurun") {
            productNew.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      } else if(type == "alfabet menaik") {
            productNew.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
      }
      setProducts(productNew);
    }

      useEffect(() => {
        getProducts();
      }, []);

    return (
        <>
        <div className="flex justify-between items-center p-3">
            <h1 className="text-xl font-bold">Daftar Products</h1>
            <div className="flex mt-5 mb-5 ml-62 gap-1 ">
                <SearchComp processSearch={processSearch} />
                <DropdownComp processSort={processSort}/>
            </div>
        </div>
        {
            loading ? (
            <div className="flex justify-center mt-65 gap-3">
              <Spinner aria-label="Default status example" />
              Sedang mengambil data....
            </div>
            ): (<CardList data={products} type="product"></CardList>)
        }

        <div className="my-5">
            <PaginationComp currentPage={currentPage} onPageChange={onPageChange}/>

        </div>
        </>
    )
}