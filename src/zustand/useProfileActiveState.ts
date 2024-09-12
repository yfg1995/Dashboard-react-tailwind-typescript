import { create } from "zustand";

interface ProfileActiveState {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const useProfileActiveState = create<ProfileActiveState>((set) => ({
  isActive: false,
  setIsActive: (active) => set({ isActive: active }),
}));
