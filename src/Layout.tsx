import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Modal } from "./components/Modal";

export const Layout = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <Sidebar />

      <main className="md:pl-20 lg:pl-60">{<Outlet />}</main>

      <Modal />
    </div>
  );
};
