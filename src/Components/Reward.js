import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, incrementByAmt } from '../Reducer/reward';



function Reward() {
  const points = useSelector(state=>state.reward.points)
  const dispatch = useDispatch();

  return (
    <> 
        <div>Reward Points : {points}</div>
        <button onClick={()=>dispatch(increase())}>Increase+</button>
        <button onClick={()=>dispatch(incrementByAmt(7))}>Increment by 7+</button>
    </>
  )
}

export default Reward