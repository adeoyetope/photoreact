import React from "react";

import Button from "react-bootstrap/Button"
const Center = () => {

    return (
        <div> 
            
            <form action="">
        <label for="name" style={{color: "green", marginTop: 15, display: "inline-block"}}>Full Name</label> <br />
        <input type="text" style={{border: "none",borderBottom: "2px solid black"}} placeholder="Enter full name" /><br />
        <label For="mail" style={{color: "green", marginTop: 15, display: "inline-block"}} >Email</label> <br />
        <input type="email" style={{border: "none",borderBottom: "2px solid black"}} /><br />
        <label For="password" style={{color: "green", marginTop: 15, display: "inline-block"}} >Password</label><br />
        <input type="password"  style={{border: "none",borderBottom: "2px solid black"}}/><br /><br />
        <button>Submit</button>
            </form>
    </div>
    )

}









export default Center;