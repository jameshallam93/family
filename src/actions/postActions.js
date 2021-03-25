import postService from "../services/postService"
import notificationActions from "../actions/notificationActions"


const postActions = {

    newPostAction(post) {
        return ({
            type: "NEW_POST",
            payload: {
                content: post.content,
                img: post.img,
                likes: post.likes,
                id: post.id
            }
        })
    },

    createNewPost(post) {
        return async dispatch => {
            const newPost = await postService.createNew(post)
            dispatch(this.newPostAction(newPost))
            dispatch(notificationActions.showNotification({ field: "New Post", message: "New post created successfully" }))
        }
    },

    updateLikesAction(post) {
        return ({
            type: "UPDATE_LIKES",
            payload: {
                content: post.content,
                img: post.img,
                likes: post.likes,
                id: post.id
            }
        })
    },

    initPostsAction() {
        return async dispatch => {
            const posts = await postService.getAll()

            dispatch({
                type: "INIT_POSTS",
                payload: {
                    posts
                }
            })
        }
    }
}

export default postActions