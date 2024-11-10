import { create } from "zustand"

type OpenGetStarted = {
    isOpenMenu: Boolean;
    onOpenMenu: () => void;
    onCloseMenu: () => void
}

export const useOpenMenuPhone = create<OpenGetStarted>((set) => ({
    isOpenMenu: false,
    onOpenMenu: () => set({isOpenMenu: true}),
    onCloseMenu: () => set({isOpenMenu: false})
}))