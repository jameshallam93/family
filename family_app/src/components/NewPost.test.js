import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NewPost from "./NewPost"
//module for testing
import postHelper from "./helpers/newPostHelper"
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

        const post = postHelper.generatePost(helper.validContent, helper.emptyString)

        expect(post).toEqual(null)
    })
    test("when given a post with no content, but img url, returns null",()=>{

        const post = postHelper.generatePost(helper.emptyString, helper.validImg)
        
        expect(post).toEqual(null)
    })
    test("when given a valid post, returns expected post object", ()=>{

        const expectedObject = helper.expectedObject()

        const returnedPostObject = postHelper.generatePost(helper.validContent, helper.validImg)

        expect(returnedPostObject).toEqual(expectedObject)
    })
})

describe("generatePostErrors function", ()=>{

    test("returns error message if passed a null post object", ()=>{
        const returnedError = postHelper.generatePostErrors(null)
        

        expect(returnedError).toEqual(helper.expectedError)
    })
    test("returns nothing if passed a valid post ", ()=>{

        const returnedError = postHelper.generatePostErrors(helper.testPost)

        expect(returnedError).not.toBeDefined()
    })
})


describe("showNotification function",()=>{

    const mockDispatch = jest.fn()

    //for future ref - need to define fake and real timers in before/afterEach, NOT main body
    beforeEach(()=>{
        jest.useFakeTimers()
    })
    afterEach(()=>{
        jest.useRealTimers()
        mockDispatch.mockReset()
    })

    test("calls on dispatch" , async ()=>{

        await postHelper.showNotification(mockDispatch, helper.validNotification)

        expect(mockDispatch).toHaveBeenCalled()
    })
    test("sets a timeout for 5 seconds to clear notification", async()=>{

        await postHelper.showNotification(mockDispatch, helper.validNotification)

        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)

    })
    test("calls on dispatch again after 5 seconds", async()=>{

        const newMockDispatch = jest.fn()

        expect(newMockDispatch).not.toHaveBeenCalled()

        await postHelper.showNotification(newMockDispatch, helper.validNotification)

        expect(newMockDispatch).toHaveBeenCalledTimes(1)

        jest.runAllTimers()

        expect(mockDispatch).toHaveBeenCalledTimes(2)
    })
    test("calls on notificationActions / setNotification once", async ()=>{

        const setNotificationSpy = jest.spyOn(notificationActions, "setNotification")

        await postHelper.showNotification(mockDispatch, helper.validNotification)

        expect(setNotificationSpy).toHaveBeenCalledTimes(1)
    })
    test("calls on notificationActions / clearNotification once", async ()=>{

        const resetNotificationSpy = jest.spyOn(notificationActions, "clearNotification")

        await postHelper.showNotification(mockDispatch, helper.validNotification)

        jest.runAllTimers()

        expect(resetNotificationSpy).toHaveBeenCalled()
    })
})


describe("createNewPost function ", ()=>{

    const mockedDispatch = jest.fn()
    const mockedCreateNew = jest.fn(()=>post)

    beforeEach(()=>{
        jest.resetModules()
        mockedDispatch.mockClear()
        mockedCreateNew.mockClear()
        jest.doMock("../services/postService", ()=>{
            return jest.fn(()=>helper.testPost)
        })
    })

    test("calls on dispatch", async()=>{

        await postHelper.createNewPost(mockedDispatch, helper.testPost)

        expect(mockedDispatch).toHaveBeenCalled()
    })
    test("calls on showNotification ", async ()=>{

        const notificationSpy = jest.spyOn(postHelper, "showNotification")

        await postHelper.createNewPost(mockedDispatch, helper.testPost)

        expect(notificationSpy).toHaveBeenCalledTimes(1)
    }) 
    //currently this test has to be last as the createNewSpy overwrites the actual import and will not return anything
    //could look at mocking the function instead - or just leave this test last
    test("calls on postService / createNew", async ()=>{

        const createNewSpy = jest.spyOn(postService, "createNew")

        await postHelper.createNewPost(mockedDispatch, helper.testPost)

        expect(createNewSpy).toHaveBeenCalledTimes(1)

    })

})