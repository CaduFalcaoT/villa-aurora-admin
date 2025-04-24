export default function Button({ size, type, children, onClick }) {
  const sizes = {
    small:
      "text-[1.2rem py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
    medium: "text-lg py-3 px-6 font-medium",
    large: "text-xl py-4 px-6 font-medium",
  };

  const variations = {
    primary: "text-blue-50 bg-blue-600 hover:bg-blue-700",
    secondary:
      "bg-white border-2 border-solid border-gray-200 hover:bg-gray-100",
    alert: "hover:text-red-600 border hover:border-red-400 ",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={`${sizes[size]} ${variations[type]} cursor-pointer rounded-sm transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
