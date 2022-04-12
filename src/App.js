import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {incNumber ,decNumber} from '../src/actions/index'

function App() {
const myState=useSelector ((state)=>state.changeNumber);
const dispatch=useDispatch()

  return (
    <div className="App">
    <h1>Hello World</h1>
    <div className="container">
      <a className="minus" title="decrement" style={{cursor:'pointer'}}  onClick={()=>dispatch(decNumber())}><span> - </span></a>
      <input name="total" type="text" className="total" value={myState} />
      <a className="plus" title="increment" style={{cursor:'pointer'}} onClick={()=>dispatch(incNumber())}><span> + </span></a>
    </div>
    </div>
  );
}

export default App;
