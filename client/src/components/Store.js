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

  // ##step 2
  brand_name_fn: (v) => set((state) => ({ ...state, brand_name: v })),
  designation_fn: (v) => set((state) => ({ ...state, designation: v })),
  email_fn: (v) => set((state) => ({ ...state, email: v })),
  email_checked_fn: (v) => set((state) => ({ ...state, email_checked: v })),

  // ## step 3
  creators_type_fn: (v) => set((state) => ({ ...state, creators_type: v })),
  creator_gender_fn: (v) => set((state) => ({ ...state, creator_gender: v })),
}));

export default useStore;
