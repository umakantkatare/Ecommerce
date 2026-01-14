import { createSlice } from "@reduxjs/toolkit";
import { setError } from "./searchSlice";


const categorySlice = createSlice({
    name: "productCategory",
    initialState:{
        category: "",
        loading: false,
        error: null
    },
    reducers:{
        setCategory(state, action){
            state.category = action.payload
        },
        setLoading(state){
            state.loading = true
            state.error = null
        },
        setError(state, action){
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {setCategory, setLoading} = categorySlice.actions

export default categorySlice.reducer