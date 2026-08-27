import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    
        <div className="parent">
        <Card user='Mahi' age={21} img="https://i.pinimg.com/1200x/d7/3a/d4/d73ad4a90315c06430a420a39484e6c0.jpg"/>
        <Card user='pavan' age={20} img="https://i.pinimg.com/736x/27/ae/2d/27ae2dc4cb125da0440d97ab84394da0.jpg"/>
        <Card user='ramya' age={18} img="https://i.pinimg.com/736x/6f/92/9a/6f929a52f39800bee53d2bed7079ecf5.jpg"/>
        <Card user='saru' age={19} img="https://i.pinimg.com/736x/59/b9/89/59b9892c9eeee159b7602fc3a8f276c4.jpg"/>
      </div>
    
      
    
  )
}

export default App
