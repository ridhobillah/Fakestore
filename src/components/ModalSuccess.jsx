import { Modal, ModalBody } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function ModalSuccess({ open, onClose }) {
  return (
    <Modal dismissible show={open} onClose={onClose} size="md">
      <ModalBody style={{background:"white"}}>
        <button type="button" onClick={onClose} style={{background:"blue", padding:"5px", borderRadius:"5px", color:"white", justifyContent:"end"}}><IoMdClose /></button>
        <div className="text-center py-6">
          <FaCheckCircle className="mx-auto mb-4 text-blue-500 text-6xl" />
          <h3 className="text-lg font-semibold">

             Proses pembelian sukses
          </h3>
        </div>
      </ModalBody>
    </Modal>
  );
}