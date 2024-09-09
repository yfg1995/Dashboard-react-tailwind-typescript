import { create } from "zustand";

interface DropdownState {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const useDropdownActiveState = create<DropdownState>((set) => ({
  isActive: false,
  setIsActive: (active) => set({ isActive: active }),
}));
