import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ammount: 1,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (id, thunkAPI) => {
    const { data : account } = await axios.get(`http://localhost:8080/account/${id}`);
    const { data : bonus } = await axios.get(`http://localhost:8080/bonus/${id}`);
    return [account.ammount , bonus.points]
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increase: (state) => {
      state.ammount += 1;
    },
    decrease: (state) => {
      state.ammount -= 1;
    },
    increaseByAmt: (state, action) => {
      state.ammount += action.payload;
    },
    decrementByAmt: (state, action) => {
      state.ammount -= action.payload;
    },
  },
  extraReducers : {
    [getUserAccount.fulfilled] : (state,action)=>{
      state.ammount = action.payload[0];
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(getUserAccount.fulfilled, (state, action) => {
  //     state.ammount = action.payload[0];
  //   });
  // },
});

export const { increase, decrease, increaseByAmt, decrementByAmt } =
  accountSlice.actions;
export default accountSlice.reducer;
