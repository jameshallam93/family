import React from "react"
import { Button, Icon } from "semantic-ui-react"


const AnimatedButton = ({type, onClick, icon}) =>(
    <Button animated type = {type}
    onClick = {onClick}>
        <Button.Content visible >
            {type}
        </Button.Content>
        <Button.Content hidden>
            <Icon name = {icon}/>
        </Button.Content>
    </Button>
)

export default AnimatedButton