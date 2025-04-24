import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CabinForm from "../features/cabins/CabinForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Cabins() {
  const [showform, setShowForm] = useState();

  function handleToggle() {
    setShowForm((form) => !form);
  }

  return (
    <>
      <div className="flex w-full items-end justify-between">
        <h1 className="text-4xl font-semibold">All cabins</h1>
        <p className="text-lg">Filter / Sort</p>
      </div>
      <div className="flex w-full grow">
        <CabinTable />
      </div>
      <Button type="primary" size="medium" onClick={handleToggle}>
        Add Cabin
      </Button>
      {showform && (
        <Modal onClose={() => setShowForm(false)}>
          <CabinForm onClose={() => setShowForm(false)} />
        </Modal>
      )}
    </>
  );
}

export default Cabins;
