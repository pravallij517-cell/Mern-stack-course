import React from 'react'


const App = () => {
  function btnClick() {
    console.log('Button clicked!')
  }
   const MouseOver=()=>{
        console.log("Mouse is working")
      }
  return (
    <div className='parent'>
      <h1>This is function class</h1>
      <button onClick={btnClick}>on Click external</button>

      <button onDoubleClick={() => {
        console.log("thanks")
      }}>on double click</button>

      <button onMouseOver={()=>{
        console.log("Mouse is working")
      }}>Mouse over click</button>

      <button onClick={btnClick} onMouseOver={MouseOver}>Two way button</button>
    </div>
  )
}

export default App

