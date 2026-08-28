import React from 'react'
import Card from './components/card'

const jobopenings=[
  { 
    img:"",
    company:"",
    duration:"",
    role:"",
    tag1:"",
    tag2:"",
    pay:"",
    location:""
  },
  { 
    img:"",
    company:"",
    duration:"",
    role:"",
    tag1:"",
    tag2:"",
    pay:"",
    location:""
  },
  {
    img:"",
    company:"",
    duration:"",
    role:"",
    tag1:"",
    tag2:"",
    pay:"",
    location:""
  },
  {
    img:"",
    company:"",
    duration:"",
    role:"",
    tag1:"",
    tag2:"",
    pay:"",
    location:""
  }
]

const App = () => {
  return (
    <div className='parent'>
    {jobopenings.map((e)=>{
      <Card img={e.img} company={e.company} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
    })}
      <Card />
      <Card />
      <Card /> 
    </div>
  )
}

export default App
