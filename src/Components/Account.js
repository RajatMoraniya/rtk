import React, { useState } from 'react';

function Account() {
 const [value , setValue] = useState();
 const [decrementValue , setDecrementValue] = useState();
  return (
    <>
        <div>Account Balance :</div>
        <button>Increment</button>
        <button>Decrement</button>
        <input type="number" value={value} placeholder='incre' onChange={(e)=>{setValue(e.target.value)}}/>
        <button >Incease By Amt</button>
        <input type="number" value={decrementValue} placeholder='decre' onChange={(e)=>{setDecrementValue(e.target.value)}}/>
        <button >Decrement By Amt</button>
    </>
  )
}

export default Account