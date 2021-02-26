import postService from "../services/postService"




const postReducer = (state = [], action) =>{

  
    switch (action.type){
      case "NEW_POST":
        return [...state, action.data]

      case "INIT_POSTS":
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


export default postReducer