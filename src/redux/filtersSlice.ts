import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISelectedFilters } from "../models/Filter";

interface IFilterState {
  filters: ISelectedFilters | null;
}

const initialState: IFilterState = {
  filters: null,
};

export const filtersSlice = createSlice({
  initialState,
  name: "filtersSlice",
  reducers: {
    removeFilters: () => initialState,
    setFilters: (state, action: PayloadAction<ISelectedFilters | null>) => {
      state.filters = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { removeFilters, setFilters } = filtersSlice.actions;
