import Posts from "./Posts"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import React from "react"
import * as redux from "react-redux"
import postService from "../services/postService"
import helper from "./testHelpers/Posts-helper"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import { shallow } from "enzyme"

//for dev
import { prettyDOM } from "@testing-library/dom"

const initialPosts = helper.initialPosts


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));


describe("on initialisation", ()=>{

    const mockedDispatch = jest.fn()
    let component;
    beforeEach(()=>{

        redux.useSelector.mockImplementation(callback =>{
            return callback(initialPosts)
        })
        redux.useDispatch.mockReturnValue(mockedDispatch)

        component = render(
            <Posts />
        )
    })

    afterEach(()=>{
        redux.useSelector.mockClear()
        redux.useDispatch.mockReset()
    })

    test("content from first post is returned", ()=>{
        component.debug()
        

        const content = component.getByText("first test post")

        expect(content).toBeDefined()
    })

    test("clicking the like button calls postService.update", ()=>{

        const updateSpy = jest.spyOn(postService, "update")

        const button = component.container.querySelector(".likeButton")
        fireEvent.click(button)

        expect(updateSpy).toHaveBeenCalled()
    
    })
    test("clicking the like button calls redux useDispatch method", ()=>{

        const button = component.container.querySelector(".likeButton")
        fireEvent.click(button)

        expect(mockedDispatch).toHaveBeenCalled()

    })

    //to write - 
    // clicking the like button calls action creator (need to find a way to mock api or store to deal with async issues)

    describe("mapped Post components are passed the correct props", ()=>{

        let componentWrapper;
        let randomIndex; 
        let postNode;

        beforeEach(()=>{
            componentWrapper = shallow(
                <Posts />
            )
            randomIndex = Math.floor(Math.random() * initialPosts.post.posts.length)
            postNode = componentWrapper.find(".post").at(randomIndex)
        })

        test("post prop is correct", ()=>{
            
            expect(postNode.prop("post")).toEqual(initialPosts.post.posts[randomIndex])
        })
        test("key prop is correct", ()=>{

            expect(Number(postNode.key())).toEqual(initialPosts.post.posts[randomIndex].id)
        })


    })


})
