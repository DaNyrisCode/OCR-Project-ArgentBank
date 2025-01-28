export const asyncThunk = (builder, asyncThunk, key, storeInLocalStorage = false) => {
    builder
      .addCase(asyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state[key] = action.payload;

        if (storeInLocalStorage) {
          localStorage.setItem(key, action.payload);
        }
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
};
