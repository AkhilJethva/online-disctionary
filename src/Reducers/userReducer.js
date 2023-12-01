import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userDataList:[]
    },
    reducers:{
        addData(state,action){
            console.log(action.payload);
            state.userDataList.push(action.payload)
        }
    }
})

export const {addData} = userSlice.actions;

export default userSlice.reducer;