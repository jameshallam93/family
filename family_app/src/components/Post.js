import React from "react"


const Post = ({post}) =>{

    const {content, img, likes} =  post 

    return(
      <div>
        <div>
          Content: {content}
        </div>
          {<img src = {img}
            width = {700}
            height = {500}
            />}
          <div>
            Number of likes: {likes}
          </div>
          -----------------------------------------------------------------------------------------------------------------------------------
      </div>
    )
  }

export default Post