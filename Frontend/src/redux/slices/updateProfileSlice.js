import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncThunk } from "../utils/asyncThunk";

// Mise à jour du userName
export const updateUserName = createAsyncThunk(
  "updateProfile/updateUserName",
  async (newUserName, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update username");
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState: {
    updatedUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetUpdateState: (state) => {
      state.updatedUser = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    asyncThunk(builder, updateUserName, "updatedUser");
  },
});

export const { resetUpdateState } = updateProfileSlice.actions;
export default updateProfileSlice.reducer;
