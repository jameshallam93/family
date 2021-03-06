import React from "react"
import { useDispatch } from "react-redux"
import useField from "../hooks/useField"
import { Form, FormField } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"
import notificationActions from "../actions/notificationActions"
import helper from "./helpers/createUserHelper"

const {setNotification, clearNotification} = notificationActions

const CreateUser = () =>{
    const dispatch = useDispatch()
    const username = useField("text")
    const password = useField("password")

    
    const generateCredentials = () =>{
        return {
            username: username.value,
            password:password.value
        }
    }


    const handleNewUser = async() =>{
        const credentials = generateCredentials()
        
        const credentialsError = helper.generateCredentialErrors(credentials)
        console.log(credentialsError)
        
        if(credentialsError){
            helper.showNotification(dispatch, credentialsError)
        }else{
        await helper.createNewUser(dispatch, credentials)
        }
    }

    const textAlign = {
        textAlign:"left"
    }

    return (
        <div style = {textAlign}>
            <h2>Create new user</h2>
            <Form onSubmit = {handleNewUser}>
                <FormField> 
                    <strong><h3>Username:</h3></strong>
                    <input {...username} className = "username"/>
                </FormField>
                <FormField>
                    <strong><h3>Password:</h3></strong>
                    <input {...password} className = "password"/>
                </FormField>
                <AnimatedButton className = "createUserButton"
                primary type = "submit"
                icon = "right arrow"
                >
                    submit
                </AnimatedButton>
            </Form>
        </div>
    )
}

export default CreateUser