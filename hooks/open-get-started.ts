import { create } from "zustand"

type OpenGetStarted = {
    isOpen: Boolean;
    onOpen: () => void;
    onClose: () => void
}

export const useOpenGetStarted = create<OpenGetStarted>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))