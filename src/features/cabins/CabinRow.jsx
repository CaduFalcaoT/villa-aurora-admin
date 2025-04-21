export default function CabinRow({ data }) {
  const { name, maxCapacity, regularPrice, discount, image } = data;

  return (
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
      <button className="cursor-pointer text-red-400">Remove</button>
    </div>
  );
}
