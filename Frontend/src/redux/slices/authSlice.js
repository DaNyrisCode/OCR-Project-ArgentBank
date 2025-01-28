import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncThunk } from '../utils/asyncThunk';

// Récupére le token depuis localStorage
const savedToken = localStorage.getItem('token');

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to login');
      }

      return data.body.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: savedToken || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },

  // Sauvegarde dans localStorage
  extraReducers: (builder) => {
    asyncThunk(builder, loginUser, 'token', true);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
