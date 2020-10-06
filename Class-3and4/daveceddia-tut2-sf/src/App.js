import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Room() {

  const [isLit, setLit] = useState(false);

  const brightness = isLit ? 'lit' : 'dark';

  const [temp, setTemp] = useState(22);

  return (
  <div id="main" className={`room ${brightness}`}><div className="text">The Room is {isLit ? 'lit' : 'dark'}<br/>
  Temperature is : {temp}&#8451; <br/>
  <button onClick={() => setLit(!isLit)}>
    Flip</button><br/>
    <button onClick={() => setLit(true)}>
      ON</button>
      <button onClick={() => setLit(false)}>
        OFF</button><br/>
        Temperature Control<br/>
        <button onClick={() => setTemp(temp + 1)}>
          +</button>
          <button onClick={() => setTemp(temp - 1)}>
            -</button></div>
    </div>
  );
}

export default Room;
