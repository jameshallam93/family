import React from "react"
import Links from "./Links"
import useField from "../hooks/useField"
import { Form } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"

const Login = () =>{

    const username = useField("text")
    const password = useField("password")

    const handleLogin = () =>{
      console.log(username.value, password.value)
    }
    const loginStyle = {
      textAlign:"left"
    }
  
    return (
      <>
      <div>
        <Links/>
      </div>
      <div>
        <Form style = {loginStyle} onSubmit = {handleLogin}>
          <Form.Field>
            <strong><h3>Username:</h3></strong>
            <input {...username}></input>
          </Form.Field>
          <Form.Field>
            <strong><h3>Password:</h3></strong>
            <input {...password}></input>
          </Form.Field>
          <AnimatedButton primary type = "submit"
          icon = "right arrow"
          onClick = {handleLogin}>
            submit
          </AnimatedButton>
        </Form>
      </div>
      </>
    )
  }

  export default Login