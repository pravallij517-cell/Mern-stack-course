import React, { useState } from 'react'

const App = () => {
  const [Title , setTitle] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("your form is submitted",Title)
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"
         placeholder='Enter your name'
         value={Title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}/>
        <button>Submit

        </button>
      </form>
    </div>
  )
}

export default App
