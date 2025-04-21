import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <div className="flex w-full items-end justify-between">
        <h1 className="text-4xl font-semibold">All cabins</h1>
        <p className="text-lg">Filter / Sort</p>
      </div>
      <div className="flex h-full w-full">
        <CabinTable />
      </div>
    </>
  );
}

export default Cabins;
