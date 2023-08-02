// this will give us a state of open and close from everywhere we want in the app

import { create } from "zustand";

interface useProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));