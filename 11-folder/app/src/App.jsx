import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("your from is submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter you name'/>
        <input type="password" placeholder='Enter you password'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
