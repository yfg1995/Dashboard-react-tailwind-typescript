import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Modal } from "./components/Modal";
import { UserForm } from "./components/UserForm";
import { HamburgerButton } from "./components/HamburgerButton";

export const Layout = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <Sidebar />

      <HamburgerButton className="fixed top-8 right-4" />

      <main className="md:pl-20 lg:pl-60">{<Outlet />}</main>

      <Modal>
        <UserForm />
      </Modal>
    </div>
  );
};
