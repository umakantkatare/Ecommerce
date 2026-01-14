import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    suggestion: [],
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setSuggestion(state, action) {
      state.suggestion = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
    clearSuggestion(state) {
      state.suggestion = [];
    },
  },
});

export const {
  setQuery,
  setResults,
  setSuggestion,
  setLoading,
  setError,
  clearResults,
  clearSuggestion,
} = searchSlice.actions;
export default searchSlice.reducer;
