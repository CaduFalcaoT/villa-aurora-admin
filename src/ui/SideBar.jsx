import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function SideBar() {
  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-[0.8rem] ${isActive ? "text-gray-800 bg-gray-50" : "text-gray-600"} text-xl font-medium py-[1.2rem] px-[3.6rem] transition-all durantion-300 rounded-sm hover:text-gray-800 hover:bg-gray-50`;

  return (
    <aside className="flex h-screen flex-col items-center gap-[1.6rem] border-2 border-solid border-gray-100 px-[1.2rem] py-[3.2rem]">
      <img
        src="/Villa-Aurora.png"
        alt="Logo"
        className="h-[9.6rem] w-[9.6rem] shrink-0"
      />
      <nav className="flex flex-col gap-[0.4rem]">
        <NavLink className={navLinkClass} to="dashboard">
          {({ isActive }) => (
            <>
              <HiOutlineHome
                className={`${isActive ? "text-indigo-600" : "text-gray-400"} text-2xl transition-all duration-300 group-hover:text-indigo-600`}
              />
              Home
            </>
          )}
        </NavLink>
        <NavLink className={navLinkClass} to="bookings">
          {({ isActive }) => (
            <>
              <HiOutlineCalendarDays
                className={`${isActive ? "text-indigo-600" : "text-gray-400"} text-2xl transition-all duration-300 group-hover:text-indigo-600`}
              />
              Bookings
            </>
          )}
        </NavLink>
        <NavLink className={navLinkClass} to="cabins">
          {({ isActive }) => (
            <>
              <HiOutlineHomeModern
                className={`${isActive ? "text-indigo-600" : "text-gray-400"} text-2xl transition-all duration-300 group-hover:text-indigo-600`}
              />
              Cabins
            </>
          )}
        </NavLink>
        <NavLink className={navLinkClass} to="users">
          {({ isActive }) => (
            <>
              <HiOutlineUsers
                className={`${isActive ? "text-indigo-600" : "text-gray-400"} text-2xl transition-all duration-300 group-hover:text-indigo-600`}
              />
              Users
            </>
          )}
        </NavLink>
        <NavLink className={navLinkClass} to="settings">
          {({ isActive }) => (
            <>
              <HiOutlineCog6Tooth
                className={`${isActive ? "text-indigo-600" : "text-gray-400"} text-2xl transition-all duration-300 group-hover:text-indigo-600`}
              />
              Settings
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}
