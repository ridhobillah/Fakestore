import { TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function SearchComp({ processSearch }) {
    return (
         <TextInput id="text" type="text" icon={CiSearch} placeholder="Cari nama produk...." className="w-2xl" onKeyUp={processSearch} />
    )
}