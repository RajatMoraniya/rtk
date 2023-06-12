import logo from './logo.svg';
import './App.css';
import Account from './Components/Account';
import Bonus from './Components/Bonus';
import { useState } from 'react';

function App() {

  const [value , setValue] = useState();
  
  return (

    <div className="App">
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button>Get User</button>
      <h3>Current Account Ammount  : </h3>
      <h3>Total Bonus Points : </h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
