import React from "react"
import Links from "./Links"
import useField from "../hooks/useField"

const Login = () =>{

    const username = useField("text")
    const password = useField("password")

    const handleLogin = () =>{
      console.log(username.value, password.value)
    }
  
    return (
      <>
      <div>
        <Links/>
      </div>
      <div>
        <form onSubmit = {handleLogin}>
          <div>
            Username:
            <input {...username}></input>
          </div>
          <div>
            Password:
            <input {...password}></input>
          </div>
          <button type = "submit">submit</button>
        </form>
      </div>
      </>
    )
  }

  export default Login