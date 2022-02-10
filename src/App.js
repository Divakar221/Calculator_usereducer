import React, { useReducer,useState } from 'react';
import './App.css';
import {reducer} from "./reducer"

function App() {
  // var stateInitialValue = {
  //   count: 0,
  // };
const [values1,setValues]=React.useState({
  count:0,
  val1:0,
  val2:0
})

  
  
  const [state, dispatch] = useReducer(reducer, values1);
  console.log(state);

  const handleonchange=(e)=>{ 

    
  setValues(...state,state.target.name=(e.target.value))
 
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };


  return (
    <div className="App">
      <h3> Calculator Using Use Reducer </h3>
    <form onSubmit={(e) => handleSubmit(e)}>
      Input value1 <input type="text" onChange={(e)=>{setValues(state.val1=(e.target.value))}} name="val1" /><br/><br/>
      Input value2<input type="text" onChange={(e)=>{setValues(state.val2=e.target.value)}} name="val2"/><br/><br/>
      
      <button onClick={() => dispatch({ type: 'Addition',  })}>
        
        ADDITION
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'SUB',payload:{num1:state.val1, num2:state.val2} })}>
       
        SUBTRATION
      </button>{' '}
      <button onClick={() => dispatch({ type: 'DIV' })}>
        {' '}
        DIVISION{' '}
      </button>{' '}
      <button onClick={() => dispatch({ type: 'MUL' })}>
        {' '}
        MULTIPLICATION{' '}
      </button>{' '}
      <button type="reset" onClick={() => dispatch({ type: 'RESET' })}> Reset </button>{' '}
      <br /> <br /><br /> <br />
      Result: {state.count} <br /> <br />
      &nbsp;
</form>
     
    </div>
  );
}

export default App;
