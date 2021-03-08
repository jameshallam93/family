import postService from "../services/postService"

const postActions = {
     newPostAction  (post) {

        return ({
          type: "NEW_POST",
          data: {
            content:post.content,
            img: post.img,
            likes:post.likes,
            id:post.id
          }
        })
    },
    updateLikesAction (post) {
      
        return ({
          type: "UPDATE_LIKES",
          data:{
            content:post.content,
            img:post.img,
            likes:post.likes,
            id:post.id
          }
        })
      },
      initPostsAction () {

        return async dispatch =>{
          const posts = await postService.getAll()
    
          dispatch({
              type:"INIT_POSTS",
              data:posts
          })
        }
    }
}

export default postActions