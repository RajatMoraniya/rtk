import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseByAmt, decrementByAmt, getUserAccount } from '../Slices/accountSlice';

function Account() {
 const [value , setValue] = useState();
 const [value2 , setValue2] = useState();
 const [decrementValue , setDecrementValue] = useState();
 const ammount = useSelector(state=>state.account.ammount)
 const dispatch = useDispatch();

  return (
    <div style={{border: '2px solid red' , margin : '5rem'}}>
        <div>Account Balance : {ammount}</div>
        <input type="number" value={value2} onChange={(e)=>setValue2(e.target.value)} />
        <button onClick={()=>{dispatch(getUserAccount(parseInt(value2)))}}>Get User</button>
        <button onClick={()=>dispatch(increase())}>Increment</button>
        <button onClick={()=>dispatch(decrease())}>Decrement</button>
        <input type="number" value={value} placeholder='incre' onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={()=>dispatch(increaseByAmt(Number.parseInt(value)))}>Incease By Amt</button>
        <input type="number" value={decrementValue} placeholder='decre' onChange={(e)=>{setDecrementValue(e.target.value)}}/>
        <button onClick={()=>dispatch(decrementByAmt(Number.parseInt(decrementValue)))}>Decrement By Amt</button>
    </div>
  )
}

export default Account