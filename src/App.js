import logo from './logo.svg';
import './App.css';
import Account from './Components/Account';
import Bonus from './Components/Bonus';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Reward from './Components/Reward';
import { initUser } from './Slices/accountSlice';
import Admin from './Components/Admin';

function App() {

  const [value , setValue] = useState();
  const ammount = useSelector(state=>state.account.ammount)
  const points = useSelector(state=>state.bonus.points)
  
  return (

    <div className="App">
      {/* <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>{initUser(value)}}>Get User</button> */}
      <h3>Current Account Ammount  : {ammount} </h3>
      <h3>Total Bonus Points : {points} </h3>
      <Admin />
      <Account />
      <Bonus />
      <Reward />
    </div>
  );
}

export default App;
