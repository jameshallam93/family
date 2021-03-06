import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Post from "./Post"
import postActions from "../actions/postActions"
import postService from "../services/postService"

const { initPostsAction, updateLikesAction } = postActions

const Posts = () => {

    const dispatch = useDispatch()

    //initialise post state from server
    useEffect(() => {
        dispatch(initPostsAction())
    }, [dispatch])

    const updateLikes = async (post) => {
        try {
            const updatedPost = await postService.update(post)
            await dispatch(updateLikesAction(updatedPost))
            await dispatch(initPostsAction)
        } catch (exception) {
            console.error(exception)
        }
    }

    const posts = useSelector(state => {
        const posts = state.post
        return posts.posts
    })

    return (
        <div>
            {posts && posts.map(post =>
                <Post
                    className="post"
                    key={post.id}
                    post={post}
                    updateLikes={updateLikes} />)}
        </div>
    )
}

export default Posts