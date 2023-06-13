import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../Slices/bonusSlice";

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <div>Bonus Points : {points}</div>
      <button onClick={() => dispatch(increase())}>Increase+</button>
    </>
  );
}

export default Bonus;
