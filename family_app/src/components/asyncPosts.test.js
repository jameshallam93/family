import Posts from "./Posts"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import React from "react"
import postReducer from "../reducers/postReducer"
import * as redux from "react-redux"
import postService from "../services/postService"
import postActions from "../actions/postActions"
import { prettyDOM } from "@testing-library/dom"
import axios from "axios"

jest.mock("axios")

const mockDispatch = jest.fn();
const mockSelector = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));


const initialPosts = [
    {
        content:"first test post",
        img:"https://picture.com",
        likes: 0,
        id: 11
    },
    {
        content:"second test post",
        img:"https://image.com",
        likes:3,
        id:22,
    },     
    {
        content:"third test post",
        img:"https://photo.com",
        likes:8,
        id:33,
    }
]
/*
describe("async tests", ()=>{
    beforeEach(()=>{
        const mockedDispatch = jest.fn()
        redux.useSelector.mockImplementation(callback =>{
            return callback(initialPosts)
        })
        redux.useDispatch.mockReturnValue(mockedDispatch)
        })
    
    afterEach(()=>{
        redux.useSelector.mockClear()

    })

    test("clicking the like button calls the update likes action creator", async ()=>{

        axios.put.mockReturnValue(initialPosts)


        const likeSpy = jest.spyOn(postActions, "updateLikesAction")
        postActions.updateLikesAction({
            content:"TET",
            likes:0,
            img: "2",
            id: 1043
        })
        const component = render(
            <Posts />
        )

        
        const button = component.container.querySelector(".likeButton")
        console.log(prettyDOM(button))
        fireEvent.click(button)
        await waitFor(()=> expect(likeSpy).toHaveBeenCalled())
        



        
    })
})
*/