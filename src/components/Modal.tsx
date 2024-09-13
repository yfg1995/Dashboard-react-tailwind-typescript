import { FC, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProfileActiveState } from "../zustand/useProfileActiveState";
import { XCircleSvg } from "../svg/XCircleSvg";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export interface IModal extends PropsWithChildren {}

export const Modal: FC<IModal> = ({ children }) => {
  const { isActive, setIsActive } = useProfileActiveState();

  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            onClick={() => setIsActive(false)}
            className="fixed inset-0 h-full w-full z-40 cursor-pointer"
            style={{ backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <ModalBody setIsActive={setIsActive}>{children}</ModalBody>
        </>
      )}
    </AnimatePresence>
  );
};

export interface IModalBody extends PropsWithChildren {
  setIsActive: (active: boolean) => void;
}

const ModalBody: FC<IModalBody> = ({ children, setIsActive }) => {
  useLockBodyScroll();
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#1e1e1e] max-w-[600px] w-full p-[20px] rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button
        onClick={() => setIsActive(false)}
        className="flex ml-auto cursor-pointer"
      >
        <XCircleSvg fill="white" />
      </button>

      {children}
    </motion.div>
  );
};
