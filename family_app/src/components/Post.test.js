import React, { Component } from "react"
import Post from "./Post"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import  postHelper from "./testHelpers/Post-helper"
import { post, mockFun } from "./testHelpers/Post-helper"
import { shallow } from "enzyme"
//for dev
import { prettyDOM } from "@testing-library/dom"




test("reders content", ()=>{
    const postComponent = render(
        postHelper.testPost
    )

    expect(postComponent.container).toHaveTextContent("Frontend test post")
})

test("renders correct number of likes", ()=>{
    const postComponent = render(
        postHelper.testPost
    )
    const likes = postComponent.container.querySelector("a")

    expect(likes).toHaveTextContent(post.likes)
})

test("is provided the correct img url", ()=>{
    const postWrapper = shallow(
        postHelper.testPost
    )
    const image = postWrapper.find(".postImage")

    expect(image.prop("src")).toEqual(post.img)
})

test("pressing like button calls event handler once", ()=>{
    const postComponent = render(
        postHelper.testPost
    )
    const likeButton = postComponent.container.querySelector(".likeButton")
    fireEvent.click(likeButton)

    expect(mockFun.mock.calls).toHaveLength(1)
    
})
test("pressing the like button (n)(where 0 <= n <= 10) times will call the event handler (n) times", ()=>{
    const newMockFun = jest.fn()
    const eventCalls = Math.floor(Math.random() * 10)
    
    const postComponent = render (
        <Post post = {post}
        key = {post.id}
        updateLikes = {newMockFun}
        />
    )
    const button = postComponent.container.querySelector(".likeButton")
    for (let i = 0 ; i < eventCalls ; i++){
        fireEvent.click(button)
    }
    expect(newMockFun.mock.calls).toHaveLength(eventCalls)
})

