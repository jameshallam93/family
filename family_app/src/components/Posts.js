import React, { useEffect } from "react"
import Post from "./Post"
import { useSelector, useDispatch } from "react-redux"
import { initPostsAction, updateLikesAction } from "../reducers/postReducer"
import postService from "../services/postService"

const Posts = () =>{

  const dispatch = useDispatch()

  //initialise post state from server
  useEffect(()=>{
    dispatch(initPostsAction())
  }, [dispatch])

  const updateLikes = async (post) =>{
    const updatedPost = await postService.update(post)
    dispatch(updateLikesAction(updatedPost))
  }

  const posts = useSelector(state => {return state})

    return(
      <div>
        {posts.map(post =>
          <Post
          key = {post.id}
          post = {post}
          updateLikes = {updateLikes}/>)}
      </div>
    )
  }
  

export default Posts