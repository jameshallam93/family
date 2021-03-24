import React from "react"
import { Message } from "semantic-ui-react"

const Notification = ({ field, message }) => {
    return (
        <Message>
            <Message.Header>{field}</Message.Header>
            <p>{message}</p>
        </Message>
    )
}
export default Notification