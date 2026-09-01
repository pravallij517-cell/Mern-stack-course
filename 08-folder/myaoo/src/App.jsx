import React, { useState } from 'react'


const App = () => {
  let number = 10;
  const [num,setNum] = React.useState(10);
  function increasenum(){
    setNum(num+1);
  }
  function decresenum(){
    setNum(num-1);
  }
  function jumpnum(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decresenum}>decrese</button>
      <button onClick={jumpnum}>jump</button>
    </div>
  )
}

export default App
