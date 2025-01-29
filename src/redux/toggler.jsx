// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: { value: false },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = globalSlice.actions;

const store = configureStore({
  reducer: { global: globalSlice.reducer },
});

export default store;
