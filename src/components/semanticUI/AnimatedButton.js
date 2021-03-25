import React from "react"
import { Button, Icon } from "semantic-ui-react"


const AnimatedButton = ({type, onClick, icon, label}) =>(
    
    <Button animated type = {type}
    onClick = {onClick}
    className = {"submitButton"}>
        <Button.Content visible >
            {type?
            type
            :
            label}
        </Button.Content>
        <Button.Content hidden>
            <Icon name = {icon}/>
        </Button.Content>
    </Button>
)

export default AnimatedButton