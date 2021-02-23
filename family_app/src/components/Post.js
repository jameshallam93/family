import React from "react"
import { Divider } from "semantic-ui-react"
import LikeButton from "./stylised/LikeButton"

const Post = ({post, updateLikes}) =>{

    const {content, img, likes} =  post 
    const handleNewLike = async () =>{
      updateLikes(post)
    }

    return(
      <div>
        <div><strong>
          <h3>Content:</h3> {content}
          </strong>
        </div>
        <div>------------</div>
          {<img src = {img}
            width = {700}
            height = {500}
            />}
        <div>
          <LikeButton likes = {likes}
           onClick = {handleNewLike}
           />
        </div>
          <Divider/>
      </div>
    )
  }

export default Post