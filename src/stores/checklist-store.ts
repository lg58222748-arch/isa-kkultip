import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChecklistState {
  checkedItems: string[];
  toggle: (id: string) => void;
  isChecked: (id: string) => boolean;
  reset: (path: string) => void;
}

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set, get) => ({
      checkedItems: [],
      toggle: (id) => {
        set((state) => ({
          checkedItems: state.checkedItems.includes(id)
            ? state.checkedItems.filter((item) => item !== id)
            : [...state.checkedItems, id],
        }));
      },
      isChecked: (id) => get().checkedItems.includes(id),
      reset: (pathPrefix) => {
        set((state) => ({
          checkedItems: state.checkedItems.filter(
            (item) => !item.startsWith(pathPrefix)
          ),
        }));
      },
    }),
    {
      name: "isa-checklist",
    }
  )
);
