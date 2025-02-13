//! RECUPERATION ET MISE A JOUR DU PROFIL

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncThunk } from '../utils/asyncThunk';

//  Récupération du profil utilisateur via API
export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch user profile');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  Mise à jour du userName via API
export const updateUserName = createAsyncThunk(
  'profile/updateUserName',
  async (newUserName, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update username');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Suppression des données profil
    resetProfile: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  // Gestion des requetes
  extraReducers: (builder) => {
    asyncThunk(builder, fetchUserProfile, 'user');
    asyncThunk(builder, updateUserName, 'user');
  },
});

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
