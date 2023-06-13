import {createAction , createReducer} from '@reduxjs/toolkit';

const initialState = {
    points : 15
}

export const increase = createAction('reward/increase')
export const incrementByAmt = createAction('reward/incrementByAmt')

const rewardReducer = createReducer(initialState , (builder)=>{
    builder
    .addCase(increase , (state,action)=>{
        state.points+=1;
    })
    .addCase(incrementByAmt , (state,action)=> {
        state.points+=action.payload;
    })
})

export default rewardReducer;