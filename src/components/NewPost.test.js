import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NewPost from "./NewPost"
//module for testing
import { generatePost, generatePostErrors } from "./helpers/newPostHelper"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()})
import { shallow } from "enzyme"
//test helper module
import helper from "./testHelpers/NewPost-helper"
import notificationActions from "../actions/notificationActions"
import postService from "../services/postService"



const mockedPost = jest.fn(()=>helper.testPost)

jest.mock("../services/postService", ()=>({
    ...jest.requireActual("../services/postService"),
    createNew : ()=>mockedPost
}))

describe("generatePost function", ()=>{

    test("when given a post with content but no img url, returns null", ()=>{

        const post = generatePost(helper.validContent, helper.emptyString)

        expect(post).toEqual(null)
    })
    test("when given a post with no content, but img url, returns null",()=>{

        const post = generatePost(helper.emptyString, helper.validImg)
        
        expect(post).toEqual(null)
    })
    test("when given a valid post, returns expected post object", ()=>{

        const expectedObject = helper.expectedObject()

        const returnedPostObject = generatePost(helper.validContent, helper.validImg)

        expect(returnedPostObject).toEqual(expectedObject)
    })
})

describe("generatePostErrors function", ()=>{

    test("returns error message if passed a null post object", ()=>{
        const returnedError = generatePostErrors(null)
        

        expect(returnedError).toEqual(helper.expectedError)
    })
    test("returns nothing if passed a valid post ", ()=>{

        const returnedError = generatePostErrors(helper.testPost)

        expect(returnedError).not.toBeDefined()
    })
})


