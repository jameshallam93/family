import React from "react"


const Post = ({post}) =>{

    const {content, img, likes} =  post 

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
            <strong>
            Number of likes: {likes}
            </strong>
          </div>
          ------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
    )
  }

export default Post