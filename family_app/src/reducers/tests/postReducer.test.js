import { create } from "json-server"
import postActions from "../../actions/postActions"
const { newPostAction, updateLikesAction, initPostsAction } = postActions
import postReducer from "../postReducer"

const newPost = {
    content:"Redux test post",
    img: "https://reduximage.com",
    likes:0,
    id:1066
}
describe("new post action creator ", ()=>{
    test("creates expected action", ()=>{

        const expectedAction = {
            type: "NEW_POST",
            payload: newPost
        }
        const createdAction = newPostAction(newPost)
        expect(createdAction).toEqual(expectedAction)
    })  

})
describe("update likes action creator ", ()=>{
    test("creates expected action", ()=>{
        const expectedAction = {
            type: "UPDATE_LIKES",
            payload: newPost
        }
        const createdAction = updateLikesAction(newPost)
        expect(createdAction).toEqual(expectedAction)
    })
})

describe("the post reducer ", ()=>{
    test("should return an empty object on startup given no action type or payload", ()=>{
        expect(postReducer(undefined, {})).toEqual({})
    })
    describe("in the case of a new post ", ()=>{
        test("adds the post to the store successfully", ()=>{
            const createPostAction = newPostAction(newPost)

            const returnedPost = postReducer({posts:[]},createPostAction)

            expect(returnedPost.posts[0]).toEqual(newPost)
        })
    })
    describe("in the case of updating a post", ()=>{
        test("the returned posts likes are updated successfully", ()=>{

            const updatedPost = {
                ...newPost,
                likes:newPost.likes + 1
            }
            const updatePostAction = updateLikesAction(updatedPost)
            const returnedPost = postReducer({posts:[newPost]}, updatePostAction)
            
            expect(returnedPost.posts[0].likes).toEqual(newPost.likes + 1)
        })
    })

})