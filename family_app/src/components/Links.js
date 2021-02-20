import React from "react"
import { BrowserRouter as Router,
    Link } from "react-router-dom"

const Links = () =>{
    const padding = {
      padding:5
    }
    return(
      <div>
        <Link stlye = {padding} to = "/home">Home</Link>
        <Link style = {padding} to = "/login">Log in</Link>
      </div>
    )
  }

export default Links