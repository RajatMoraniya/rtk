import { createSlice, createAction } from "@reduxjs/toolkit";
import { getUserAccount } from "./accountSlice";


const increaseByAmt = createAction('account/increaseByAmt')
const initialState = {
    points : 1
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers : {
        increase : (state) => {
            state.points+=1;
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(increaseByAmt , (state, action)=>{
            if(action.payload>=100){
                state.points++;
            }
        })
        .addCase(getUserAccount.fulfilled, (state,action)=>{
            state.points = action.payload[1];
        })
    }
    
})

export const {increase} = bonusSlice.actions;
export default bonusSlice.reducer;