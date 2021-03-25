import React from "react"
import { useDispatch } from "react-redux"
import useField from "../hooks/useField"
import {
    Form,
    FormField
} from "semantic-ui-react"

import LeftAlignedDiv from "./styled/LeftAlignDiv"
import AnimatedButton from "./semanticUI/AnimatedButton"
import generateCredentialErrors from "./helpers/generateCredentialErrors"
import notificationActions from "../actions/notificationActions"
import userActions from "../actions/userActions"

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
        
        const credentialsError = generateCredentialErrors(credentials)
        console.error(credentialsError)
        
        if(credentialsError){
            dispatch(notificationActions.showNotification(credentialsError))
            return;
        }
        dispatch(userActions.createNewUser(credentials))
    }

    return (
        <LeftAlignedDiv>
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
        </LeftAlignedDiv>
    )
}

export default CreateUser