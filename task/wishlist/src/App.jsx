import React from 'react'
import Card from './components/Card.jsx'

const wishlist=[
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DoUhFHRgxSmiJdY9FC2W9QCDZ3OWnWP8ps9H68kgfb0m2dBJBUAuByy3&s=10",
    tag1:"Most-loved",
    tag2:"Special offer",
    
  },
  {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvHixNa0amfPbSAOewox8LxCaFC9EKwhyWWMP-WvCWg&s=10",
    tag1:"Widest Range",
    tag2:"Under 599",
    
  },
  {
     img:"https://images.philips.com/is/image/philipsconsumer/f11c3bb618c747b9a726b1be001e23ba?$pnglarge$&wid=1250",
    tag1:"Most-loved",
    tag2:"Top rated",
  },
  

];


const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/> */}
      {wishlist.map((e)=>{
        return <Card img={e.img}  tag1={e.tag1} tag2={e.tag2} />
      })}
    </div>
      
  )
}

export default App