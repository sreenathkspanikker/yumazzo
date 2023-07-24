import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number;
  name: string;
}

const initialState: { selectedItem: Item | null } = {
  selectedItem: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<Item | null>) => {
      state.selectedItem = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem, addItem } = appSlice.actions;
export default appSlice.reducer;
