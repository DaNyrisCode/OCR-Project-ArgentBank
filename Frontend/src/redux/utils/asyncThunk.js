// Gestion des etats/actions asynchrones 

export const asyncThunk = (builder, asyncThunk, key, storeInLocalStorage = false) => {
  builder
  // Requete en cours
    .addCase(asyncThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    // Requete terminée
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state[key] = action.payload;

      // Stocke les données dans localStorage si nécessaire
      if (storeInLocalStorage) {
        localStorage.setItem(key, JSON.stringify(action.payload));
      }
    })
    // Requete echouée
    .addCase(asyncThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};
