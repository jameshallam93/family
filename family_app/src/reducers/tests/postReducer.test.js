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
            data: newPost
        }
        const createdAction = newPostAction(newPost)
        expect(createdAction).toEqual(expectedAction)
    })  

})
describe("update likes action creator ", ()=>{
    test("creates expected action", ()=>{
        const expectedAction = {
            type: "UPDATE_LIKES",
            data: newPost
        }
        const createdAction = updateLikesAction(newPost)
        expect(createdAction).toEqual(expectedAction)
    })
})

describe("the post reducer ", ()=>{
    test("should return an empty array on startup given no action type", ()=>{
        expect(postReducer(undefined, {})).toEqual([])
    })
    describe("in the case of a new post ", ()=>{
        test("adds the post to the store successfully", ()=>{
            const createPostAction = newPostAction(newPost)
            const returnedPost = postReducer([],createPostAction)[0]
            expect(returnedPost).toEqual(newPost)
        })
    })
    describe("in the case of updating a post", ()=>{
        test("the returned posts likes are updated successfully", ()=>{
            const updatedPost = {
                ...newPost,
                likes:newPost.likes + 1
            }
            const updatePostAction = updateLikesAction(updatedPost)
            const returnedPost = postReducer([newPost], updatePostAction)[0]
            expect(returnedPost.likes).toEqual(newPost.likes + 1)
        })
    })

})