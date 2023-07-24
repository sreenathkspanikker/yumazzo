import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from '../utils/types';
import listItemsData from '../utils/listItemsData.json';

interface RecipeItem {
  id: number;
  flag: string;
  name: string;
  category: string;
  duration: string;
  details: {
    difficulty: string;
    description: string;
    protein: string;
    spiceLevel: string;
    spices: string;
    cookingOil: string;
    volumeWeight: number;
    serves: number;
    authenticity: string;
    stock: string;
    produce: string;
    origin: string;
  };
}

interface CreateSliceState {
  listItems: RecipeItem[];
}

const initialState: CreateSliceState = {
  listItems: listItemsData,
};

const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addListItem: (state, action: PayloadAction<ListItem>) => {
      const newListItem: RecipeItem = {
        ...action.payload,
        id: state.listItems.length + 1, // Generate a new ID
      };
      state.listItems.push(newListItem);
    },
  },
});

export const { addListItem } = addSlice.actions;
export default addSlice.reducer;
