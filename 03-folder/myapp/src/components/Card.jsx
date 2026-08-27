import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* <div className="card">
        <img src="https://i.pinimg.com/1200x/50/0c/5b/500c5b3d635612a919beecd954580817.jpg" alt="" />
        <h1>Mahi,21</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro vero sequi.</p>
        <button>view profile</button>
      </div> */}
      <div className="card">
        <img src={props.img}alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro vero sequi.</p>
        <button>view profile</button>
      </div>

    </div>
  )
}

export default Card
