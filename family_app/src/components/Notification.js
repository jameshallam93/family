import React from "react"
import { Message } from "semantic-ui-react"


const Notification = ({content, header}) =>{
    return(
        <Message>
            <Message.Header>{header}</Message.Header>
            <p>{content}</p>
        </Message>
    )
}
export default Notification