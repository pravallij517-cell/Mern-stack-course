import React from 'react'
import Card from './components/Card.jsx'

const jobOpenings=[
  {
    img:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    company:"Meta",
    duration:"3 days ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$8000",
    location:"Bangalore"
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    company:"Amazon",
    duration:"4 days ago",
    role:"Backend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$10000",
    location:"mysore"
  },
  {
    img:"https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png",
    company:"Cognizant",
    duration:"2 days ago",
    role:"Software Development Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$7000",
    location:"hydrabad"
  },
  {
    img:"https://www.logo.wine/a/logo/HCL_Technologies/HCL_Technologies-Logo.wine.svg",
    company:"HCL",
    duration:"6 days ago",
    role:"Data Sciencist",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$9000",
    location:"chennai"
  },
  
];


const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/> */}
      {jobOpenings.map((e)=>{
        return <Card img={e.img} company={e.company} duration={e.duration} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
      })}      
    </div>
    
  )
}

export default App