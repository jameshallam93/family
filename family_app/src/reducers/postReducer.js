import postService from "../services/postService"




const postReducer = (state = [], action) =>{
    switch (action.type){
      case "NEW_POST":
        return [...state, action.data]

      case "INIT_POSTS":
          console.log("action", action)
        return action.data

      case "UPDATE_LIKES":
        const newState = state.map(post =>
          post.id === action.data.id ?
          action.data
          :
          post
        )
        return newState
        
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
        likes:post.likes,
        id:post.id
      }
    })
}

export const updateLikesAction = (post) =>{
  return ({
    type: "UPDATE_LIKES",
    data:{
      content:post.content,
      img:post.img,
      likes:post.likes,
      id:post.id
    }
  })
}

export const initPostsAction = () =>{
    return async dispatch =>{
      const posts = await postService.getAll()

      dispatch({
          type:"INIT_POSTS",
          data:posts
      })
    }
}

export default postReducer