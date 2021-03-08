import React from "react"
import useField from "../hooks/useField"
import { Form } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"
import userActions from "../actions/userActions"
import loginService from "../services/loginService"
import helper from "./helpers/loginFormHelper"
import { useDispatch } from "react-redux"
const { loginUser } = userActions

const LoginForm = () =>{

    const dispatch = useDispatch()
    
    const username = useField("text")
    const password = useField("password")


    const generateUser = ()=>{
      return({
        username: username.value,
        password:password.value,
      })
    }
    
    const handleLogin = async () =>{
      const user = generateUser()
      try{
        await helper.loginUser(dispatch, user)
      }catch(exception){
        console.log(exception)
      }
    }

  
    return (
      <>

      <div style = {{textAlign: "left"}} >
        <h2>Login</h2>
        <Form onSubmit = {handleLogin}>
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

  export default LoginForm