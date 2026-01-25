import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    suggestions: [],
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
    setSuggestions(state, action) {
      state.suggestions = action.payload;
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
    clearSuggestions(state) {
      state.suggestions = [];
    },
   
  },
});

export const {
  setQuery,
  setResults,
  setSuggestions,
  setLoading,
  setError,
  clearResults,
  clearSuggestions,

} = searchSlice.actions;
export default searchSlice.reducer;
