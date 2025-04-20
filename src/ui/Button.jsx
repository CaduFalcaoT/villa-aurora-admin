export default function Button({ size, type }) {
  const sizes = {
    small:
      "text-[1.2rem py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
    medium: "text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium",
    large: "text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium",
  };

  const variations = {
    primary: "text-blue-50 bg-blue-600 hover:bg-blue-700",
    secondary:
      "text-blue-600 bg-white border border-solid border-gray-200 hover:bg-gray-500",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return <button className={`${sizes[size]}${variations[type]}`}></button>;
}
