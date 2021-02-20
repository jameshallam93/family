import Axios from "axios"
const baseUrl = "http://localhost:3001/posts"

// refactor into new services module
const getAll = async () =>{
    const response = await Axios.get(baseUrl)

    return response.data
}



const postReducer = (state = [], action) =>{
    switch (action.type){
      case "NEW_POST":
        return [...state, action.data]
      case "INIT_POSTS":
          console.log("action", action)
        return action.data
      default:
        return state
    }
  }

export const newPostAction = (post) =>{
    return ({
      type: "NEW_POST",
      data: {
        content:post.content,
        img: post.img,
        likes:post.likes
      }
    })
}

export const initPostsAction = () =>{
    return async dispatch =>{
        const posts = await getAll()

        dispatch({
            type:"INIT_POSTS",
            data:posts
        })
    }
}

export default postReducer