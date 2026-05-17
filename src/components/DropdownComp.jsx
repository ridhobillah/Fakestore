import { Dropdown, DropdownItem } from "flowbite-react";

export default function DropdownComp({ processSort }) {
    return (
         <Dropdown color="alternative" label="Urutkan Data" dismissOnClick={false}>
      <DropdownItem onClick={() => processSort("harga termurah")}>Harga termurah</DropdownItem>
      <DropdownItem onClick={() => processSort("harga termahal")}>Harga termahal</DropdownItem>
      <DropdownItem onClick={() => processSort("alfabet menurun")}>Alfabet Menurun</DropdownItem>
      <DropdownItem onClick={() => processSort("alfabet menaik")}>Alfabet Menaik</DropdownItem>
    </Dropdown>
    )
}