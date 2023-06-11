import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: "Show all",
	reducers: {
		changeFilter: (_, action) => action.payload,
	},
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;