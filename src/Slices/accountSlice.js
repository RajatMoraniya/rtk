import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ammount : 1
}

const accountSlice = createSlice({
    name : 'account',
    initialState,
    reducers : {
        increase : (state) => {
            state.ammount+=1;
        },
        decrease : (state) => {
            state.ammount-=1;
        },
        increaseByAmt : (state,action) => {
            state.ammount+=action.payload
        }
    }
})

export const {increase , decrease , increaseByAmt} = accountSlice.actions;
export default accountSlice.reducer;
