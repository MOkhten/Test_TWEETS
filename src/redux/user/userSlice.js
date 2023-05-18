import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null
  },

}

const usersSlice = createSlice({
    name: 'users',
    initialState,

    extraReducers: {
    [fetchUsers.pending](state){
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
      [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },
      
  },
});


export const usersReducer = usersSlice.reducer;