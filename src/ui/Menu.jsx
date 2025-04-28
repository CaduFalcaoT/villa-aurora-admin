import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";

/* const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`; */

const MenuContext = createContext();

function Menu({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  const ref = useClickOutside(close);

  return (
    <MenuContext.Provider value={{ openId, close, open }}>
      <span className="relative flex" ref={ref}>
        {children}
      </span>
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { open, close, openId } = useContext(MenuContext);

  function handleClick() {
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button className="cursor-pointer rounded-sm border-none bg-none transition-all duration-200 hover:bg-gray-100">
      <HiEllipsisVertical
        onClick={handleClick}
        className="h-7 w-7 text-gray-700"
      />
    </button>
  );
}

function List({ id, children }) {
  const { openId } = useContext(MenuContext);

  if (openId !== id) return null;

  return (
    <ul className="absolute top-8 right-0 z-100 rounded-md bg-white shadow-md">
      {children}
    </ul>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li
      className="flex w-full cursor-pointer items-center gap-4 p-1 px-4 py-2 text-base text-gray-500 normal-case hover:bg-gray-50"
      onClick={handleClick}
    >
      {icon}
      <span>{children}</span>
    </li>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
