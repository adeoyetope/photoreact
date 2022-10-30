import React from 'react'
import photo from './Photomy/Dove.jpg'
import "./Style.css"

const Fullname = () => {
    return (
    <div>
        <h2 style={{color:"green", marginTop: "30px"}}> Adetops </h2> 
        <img src={photo} alt="photo" />
    </div>
    )
}

export default Fullname