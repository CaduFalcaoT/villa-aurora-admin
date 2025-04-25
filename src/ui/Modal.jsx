import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useClickOutside(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed top-0 left-0 z-1000 h-screen w-full backdrop-blur-xs transition-all duration-500">
      <div
        className="fixed top-1/2 left-1/2 -translate-1/2 rounded-lg bg-white px-8 py-5 shadow-[0px_25px_40px_8px_rgb(0,0,0,0.15)] transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute top-5 right-5 cursor-pointer border-none bg-none text-4xl transition-all duration-200 hover:text-gray-400"
          onClick={close}
        >
          <HiXMark />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
