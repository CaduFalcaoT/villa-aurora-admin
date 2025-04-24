import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";

export default function CabinRow({ data }) {
  const { name, maxCapacity, regularPrice, discount, image } = data;
  const [showForm, setShowForm] = useState(false);

  const { mutate } = useDeleteCabin();

  return (
    <>
      <div
        role="row"
        className="relative grid grid-cols-[116px_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 border-b-2 border-gray-100 py-6 pr-10 font-semibold text-gray-600 uppercase not-last:border-b"
      >
        <img
          src={image}
          alt="cabin image"
          className="absolute flex aspect-[3/2] h-full object-cover object-center"
        />
        <div></div>
        <div className="font-sono font-bold text-gray-600">{name}</div>
        <div>{maxCapacity}</div>
        <div className="font-semibold">{regularPrice}</div>
        <div className="font-medium text-green-700">{discount}</div>
        <span className="flex gap-4">
          <button
            className="cursor-pointer text-red-400"
            onClick={() => mutate(data)}
          >
            Remove
          </button>
          <button onClick={() => setShowForm(true)}>Edit</button>
        </span>
      </div>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CabinForm onClose={() => setShowForm(false)} cabinValue={data} />
        </Modal>
      )}
    </>
  );
}
