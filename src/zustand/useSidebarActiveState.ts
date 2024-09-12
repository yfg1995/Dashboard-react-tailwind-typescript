import { create } from "zustand";

interface SidebarActiveState {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const useSidebarActiveState = create<SidebarActiveState>((set) => ({
  isActive: false,
  setIsActive: (active) => set({ isActive: active }),
}));
