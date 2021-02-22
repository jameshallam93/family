import React from "react"
import { Button, Icon, Label } from "semantic-ui-react"
const LikeButton = ({likes, onClick}) =>{

    return (
        <Button as = "div" labelPosition = "right" onClick = {onClick}>
            <Button color = "red">
                <Icon name = "heart"/>
            </Button>
            <Label as ="a" basic color = "red" pointing = "left">
                {likes}
            </Label>
        </Button>
    )
}

export default LikeButton