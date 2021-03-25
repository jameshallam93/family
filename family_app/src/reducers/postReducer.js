
const postReducer = (state = {}, action) => {

    switch (action.type) {
        case "NEW_POST":
            return { posts: [...state.posts, action.payload] }
        case "INIT_POSTS":
            return action.payload
        case "UPDATE_LIKES":
            const newState = { posts: [] }
            state.posts.map(post =>
                post.id === action.payload.id ?
                    newState.posts.push(action.payload)
                    :
                    newState.posts.push(post)
            )
            return newState

        default:
            return state
    }
}

export default postReducer