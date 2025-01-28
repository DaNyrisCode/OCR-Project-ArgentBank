import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import updateProfileReducer from './slices/updateProfileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    updateProfile: updateProfileReducer
  },
});

export default store;
