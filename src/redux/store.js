import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from './user/userSlice';
import { filterReducer } from "./user/filterSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const usersPersistConfig = {
	key: 'root',
	storage,
};

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);

 const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),

});

const persistor = persistStore(store);

export { store, persistor };