import postService from "../../services/postService"
import postActions from "../../actions/postActions"
import notificationActions from "../../actions/notificationActions"

const newPostHelper = {

    async createNewPost (dispatch, post) {

        const newPost = await postService.createNew(post)

        dispatch(postActions.newPostAction(newPost))

        this.showNotification(dispatch, {field:"Post", message: "New post created successfully"})
    },

    showNotification (dispatch, notification) {

        dispatch(notificationActions.setNotification(notification.field, notification.message))

        setTimeout(()=>{
            dispatch(notificationActions.clearNotification())
        }, 5000)
    },
    generatePost (content, img) {

        if (! (content && img)){
            return null
        }
        return {
            content: content,
            img: img,
            likes:0
        }
    },
    generatePostErrors (post) {

       if (post === null){
           return {
               field:"Post",
               message:"Content and img url must be supplied"
           }
       }
    }
}

export default newPostHelper