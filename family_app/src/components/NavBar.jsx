import React from "react"
import {
    Link
} from "react-router-dom"

const NavBar = () => {
    const padding = {
        padding: 5
    }
    return (
        <div>
            <Link stlye={padding} to="/home">Home</Link>
            <Link style={padding} to="/login">Log in</Link>
        </div>
    )
}

export default NavBar