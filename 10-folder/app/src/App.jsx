import React, { useState } from 'react'

const App = () => {
  const [num, setnum]= useState(10)
  const [obj, setobj]= useState({user:'Bunty',age:20})
  // const btnClicked=()=>{
  //   const newobj={...obj}
  //   newobj.user='harry'
  //   setobj(newobj)
  // }
  const btnClicked=()=>{
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
  }
  
 
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Update</button>
    </div>
  )
}

// export default App

// const App = () => {
//   const [num, setCount] = useState(0)
//   const replace=()=>{
//     console.log(num)
//     setCount(90)
//     console.log(num)
//   }

//   return (
//     <div>
//       <h1>My App</h1>
//       <p>{num}</p>
//       <button onClick={replace}>
//         Click me
//       </button>
//     </div>
//   )
// }

export default App

