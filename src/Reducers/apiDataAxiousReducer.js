import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('data/fetchData', async()=>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data)
        return response.data

    } catch (error) {
        throw Error("Error while fetching data")      
    }
});

const dataSlice = createSlice({
    name:"data",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        
        
    },
    extraReducers:{
        [fetchData.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchData.fulfilled]: (state,action)=>{
            state.loading = false;
            state.users = action.payload;
        },
        [fetchData.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        }
    }
})



console.log(fetchData.pending? "true": "false")

export const {reducer: dataReducer} = dataSlice;

export default dataSlice.reducer;

