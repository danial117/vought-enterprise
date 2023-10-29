import { createSlice } from "@reduxjs/toolkit";



const initialState={
    user:false,
    token:null,

}


export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
         state.user=action.payload.user;
        },
        user_logout:(state)=>{
            state.user=false;
        },
        setToken:(state,action)=>{
            state.token=action.payload.token;
        }
    }
    
})



export const {setUser,user_logout,setToken} = authSlice.actions;

export default authSlice.reducer;
































