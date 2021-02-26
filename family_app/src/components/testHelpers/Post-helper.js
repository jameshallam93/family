import Post from "../Post"



export const post = {
    content:"Frontend test post",
    img: "none",
    likes: 7,
    id: 101010
}
export const mockFun = jest.fn()
const postHelper = {
    

    testPost : <Post post = {post}
                updateLikes = {mockFun}
                key = {post.id} />
                
}

export default postHelper