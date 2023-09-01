import { create } from "zustand";

const useStore = create((set) => ({
  varient: [],
  ingrdients: [],
  quantity: 0,
  index: [],
  selectedItems: [],

  // Functions

  addToSelected: (item) => {
    set((state) => ({
      selectedItems: [...state.selectedItems, item],
    }));
  },

  removeFromSelected: (item) => {
    set((state) => ({
      selectedItems: state.selectedItems.filter((i) => i !== item),
    }));
  },

  varient_fn: (index, newVariant) => {
    set((state) => {
      const newVariants = [...state.varient];
      newVariants[index] = newVariant;
      return { variants: newVariants };
    });
  },

  index_fn: (v) => set((state) => ({ ...state, index: v })),

  ingedients_fn: (v) => set((state) => ({ ...state, ingrdients: v })),
}));

export default useStore;
