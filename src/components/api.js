import axios from "axios";

axios.defaults.baseURL = 'https://64646d77043c103502b946bc.mockapi.io/api/v1/';

export let page = 1;
const limit = 4;

export const fetchUsers  = async () => {
   try {
    const res = await axios.get(`users?page=${page}&limit=${limit}`);
    page = page + 1;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

