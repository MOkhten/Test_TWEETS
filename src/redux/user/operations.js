import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64646d77043c103502b946bc.mockapi.io/api/v1/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users', );
        return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserFollowers = createAsyncThunk(
  'users/updateUserFollowers',
  async (id, {getState, rejectWithValue}) => {
      const user = getState().users.users.find(user => user.id === id);
      let amountFollowers = user.followers;
		user.isActiveBtn ? (amountFollowers -= 1) : (amountFollowers += 1);
		const newUser = {
			...user,
			followers: amountFollowers,
			isActiveBtn: !user.isActiveBtn,
		};
		try {
			const { data } = await axios.put(`/users/${id}`, newUser);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
  }
)

