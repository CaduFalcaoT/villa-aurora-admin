import { useDeleteCabin } from "./useDeleteCabin";
import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";
import { useCreateCabin } from "./useCreateCabin";
import { HiMiniSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { formatCurrency } from "../../utils/helpers";
import Menu from "../../ui/Menu";

export default function CabinRow({ data }) {
  const { name, maxCapacity, regularPrice, discount, image, id } = data;

  const { mutate: del, isPending: isDeleting } = useDeleteCabin();
  const { mutate: duplicate } = useCreateCabin();

  return (
    <>
      <div
        role="row"
        className="relative grid grid-cols-[116px_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 border-b-2 border-gray-100 py-6 pr-10 font-semibold text-gray-600 uppercase not-last:border-b"
      >
        <img
          src={image}
          alt="cabin image"
          className="absolute top-1/2 flex aspect-[3/2] h-[90%] -translate-y-1/2 object-cover object-center"
        />
        <div></div>
        <div className="font-sono font-bold text-gray-600">{name}</div>
        <div className="text-base font-medium normal-case">{`Fits up to ${maxCapacity} guests`}</div>
        <div className="font-semibold">{formatCurrency(regularPrice)}</div>
        <div className="font-medium text-green-700">
          {formatCurrency(discount)}
        </div>
        <span className="flex justify-end">
          <Modal>
            <Menu>
              <Menu.Toggle id={id} />
              <Menu.List id={id}>
                <Menu.Button
                  icon={<HiMiniSquare2Stack />}
                  onClick={() =>
                    duplicate({
                      name: `Copy of ${name}`,
                      maxCapacity,
                      regularPrice,
                      discount,
                      image,
                    })
                  }
                >
                  Copy
                </Menu.Button>
                <Modal.Open opens="edit">
                  <Menu.Button icon={<HiPencil />}>Edit</Menu.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menu.Button icon={<HiTrash />}>Delete</Menu.Button>
                </Modal.Open>
              </Menu.List>
            </Menu>

            <Modal.Window name="edit">
              <CabinForm cabinValue={data} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => del(data)}
              />
            </Modal.Window>
          </Modal>
        </span>
      </div>
    </>
  );
}
