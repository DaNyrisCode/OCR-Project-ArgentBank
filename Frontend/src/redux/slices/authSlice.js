//! AUTHENTIFICATION

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncThunk } from '../utils/asyncThunk';

// Récupère le token depuis localStorage
const savedToken = localStorage.getItem('token') || null;

// Connexion via API
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
    token: savedToken,
    loading: false,
    error: null,
  },
  reducers: {
    // Deconnexion & suppression du token
    logout: (state) => {
        state.token = null;
        localStorage.removeItem('token');
    },
    // Suppression des données de l'utilisateur
    resetState: () => ({ token: null, loading: false, error: null }),
  },
  // Gestion des requetes
  extraReducers: (builder) => {
    asyncThunk(builder, loginUser, 'token', true);
  },
});

export const { logout, resetState } = authSlice.actions;
export default authSlice.reducer;
