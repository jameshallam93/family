import Posts from "./Posts"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import React from "react"
import postReducer from "../reducers/postReducer"
import * as redux from "react-redux"
import postService from "../services/postService"
import postActions from "../actions/postActions"
import axios from "axios"

import { prettyDOM } from "@testing-library/dom"


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

const mockDispatch = jest.fn();
const mockSelector = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe("on initialisation", ()=>{
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
    test("content from first post is returned", ()=>{
        const component = render(
            <Posts />
        )
        const content = component.getByText("first test post")

        expect(content).toBeDefined()
    })
    test("clicking the like button calls postService.update", ()=>{
        const updateSpy = jest.spyOn(postService, "update")
        const component = render(
            <Posts />
        )
        const button = component.container.querySelector(".likeButton")
        fireEvent.click(button)

        expect(updateSpy).toHaveBeenCalled()
    
    })



})
