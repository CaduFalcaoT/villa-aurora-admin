import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabinForm">
        <Button type="primary" size="medium">
          Add Cabin
        </Button>
      </Modal.Open>
      <Modal.Window name="cabinForm">
        <CabinForm />
      </Modal.Window>
    </Modal>
  );
}
