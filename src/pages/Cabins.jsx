import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/addCabin";

function Cabins() {
  return (
    <>
      <div className="flex w-full items-end justify-between">
        <h1 className="text-4xl font-semibold">All cabins</h1>
        <p className="text-lg">Filter / Sort</p>
      </div>
      <div className="flex w-full grow">
        <CabinTable />
      </div>

      <AddCabin />
    </>
  );
}

export default Cabins;
