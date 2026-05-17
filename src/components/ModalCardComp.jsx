import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { ButtonGroup } from "flowbite-react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function ModalCardComp({
  item,
  handleClose,
  openModal,
  handleBtnKeranjang,
}) {
  const [qty, setQty] = useState(1);

  function updateQty(type) {
    if (type == "+") {
      // prev : parameter setter state untuk mengambil nilai state sebelumnya
      setQty((prev) => prev + 1);
    } else {
      // jika - , cmn boleh di update max sampe 1 pengurangnya
      if (qty > 1) {
        setQty((prev) => prev - 1);
      }
    }
  }
  return (
    <Modal dismissible show={openModal} onClose={handleClose}>
      <ModalHeader>Tambah item Keranjang</ModalHeader>
      <ModalBody>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                alt="Neil image"
                height="32"
                src={item.images ? item.images[0] : ""}
                width="50"
                className="rounded-full"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {item.price}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <ButtonGroup>
              <Button color="blue" onClick={() => updateQty("-")}>
                <FaMinus className="w-4 h-4" />
              </Button>
              <Button color="alternative">{qty}</Button>
              <Button color="blue" onClick={() => updateQty("+")}>
                <FaPlus className="w-4 h-4" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="flex justify-end">
        <Button color="alternative" onClick={() => setOpenModal(false)}>
          Batal
        </Button>
        <Button color="blue" onClick={() => handleBtnKeranjang(item, qty)}>
          Keranjang
        </Button>
      </ModalFooter>
    </Modal>
  );
}
