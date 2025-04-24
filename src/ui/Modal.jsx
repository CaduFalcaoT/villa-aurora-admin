import { HiXMark } from "react-icons/hi2";

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed top-0 left-0 z-1000 h-screen w-full backdrop-blur-xs transition-all duration-500">
      <div className="fixed top-1/2 left-1/2 -translate-1/2 rounded-lg bg-white px-8 py-5 shadow-[0px_25px_40px_8px_rgb(0,0,0,0.15)] transition-all duration-500">
        <button
          className="absolute top-5 right-5 cursor-pointer border-none bg-none text-4xl transition-all duration-200 hover:text-gray-400"
          onClick={onClose}
        >
          <HiXMark />
        </button>
        {children}
      </div>
    </div>
  );
}
