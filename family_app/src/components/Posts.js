import React, { useEffect } from "react"
import Post from "./Post"
import { useSelector, useDispatch } from "react-redux"
import { initPostsAction } from "../reducers/postReducer"

const Posts = () =>{

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(initPostsAction())
  }, [dispatch])
  
  const posts = useSelector(state => {
  return state}
  )

    return(
      <div>
        {posts.map(post =>
          <Post
          key = {post.content}
          post = {post}/>)}
      </div>
    )
  }
  

export default Posts