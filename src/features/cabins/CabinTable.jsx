import CabinRow from "./CabinRow";
import { DotSpinner } from "ldrs/react";
import "ldrs/react/DotSpinner.css";
import { useCabins } from "./useCabins";

export default function CabinTable() {
  const { data: cabins, isLoading, isError } = useCabins();

  return isLoading ? (
    <div className="flex h-full w-full items-center justify-center">
      <DotSpinner size="56" speed="0.9" color="#232323" />
    </div>
  ) : isError ? (
    <p className="flex h-full w-full items-center justify-center text-center text-lg text-red-400">
      Failed to fetch cabins.
    </p>
  ) : (
    <div
      role="table"
      className="w-full rounded-md border-2 border-gray-200 bg-white text-lg"
    >
      <div
        role="row"
        className="grid grid-cols-[116px_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-6 rounded-md border-b-2 border-gray-100 bg-gray-50 py-6 pr-10 font-semibold text-gray-600 uppercase"
      >
        <div></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>discount</div>
        <div></div>
      </div>
      {cabins.map((cabin) => (
        <CabinRow data={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
