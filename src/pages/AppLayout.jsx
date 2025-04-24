import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import SideBar from "../ui/SideBar";

export default function AppLayout() {
  return (
    <main className="flex">
      <SideBar />
      <span className="flex max-h-screen w-full flex-col">
        <Header>HEADER</Header>
        <main className="flex h-full w-full flex-col gap-8 overflow-auto bg-gray-50 p-16">
          <Outlet />
        </main>
      </span>
    </main>
  );
}
