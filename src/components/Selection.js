
import React, { useState } from 'react'
import '../styles/Child.css'

const Selection = (props) => {
    const [colorSetter, setcolorSetter] = useState("");
  return (
    <div className='fix-box' style={{backgroundColor:colorSetter}} onClick={() =>{setcolorSetter(props.data.background)}} >
        Section {props.index+1}
    </div>
  )
}

export default Selection