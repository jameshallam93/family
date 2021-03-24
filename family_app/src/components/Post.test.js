import React from "react"
import Post from "./Post"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from "enzyme"
import  postHelper from "./testHelpers/Post-helper"
import { post, mockFun } from "./testHelpers/Post-helper"
//for dev
import { prettyDOM } from "@testing-library/dom"
//as
describe.only("The post component ", ()=>{
    let postComponent;
    beforeEach(()=>{
        postComponent = render(
            postHelper.testPost
        )
    })

    afterEach(()=>{
        mockFun.mockReset()
    })
    
    test("reders content", ()=>{

        expect(postComponent.container).toHaveTextContent(post.content)
    })

    test("renders correct number of likes", ()=>{

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

        const likeButton = postComponent.container.querySelector(".likeButton")
        fireEvent.click(likeButton)

        expect(mockFun.mock.calls).toHaveLength(1)
        
    })
    test("pressing the like button (n)(where 0 <= n <= 10) times will call the event handler (n) times", ()=>{

        const eventCalls = Math.floor(Math.random() * 10)
        

        const button = postComponent.container.querySelector(".likeButton")
        
        for (let i = 0 ; i < eventCalls ; i++){
            fireEvent.click(button)
        }
        expect(mockFun.mock.calls).toHaveLength(eventCalls)
    })

})


