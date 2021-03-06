import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import * as redux from "react-redux"
//module for testing - contains all helper functions for component
import userHelper from "./helpers/createUserHelper"
import userService from "../services/userService"
import CreateUser from "./CreateUser"
//helper module for tests.
import helper from "./testHelpers/CreateUser-helper"
// for dev
import { prettyDOM } from "@testing-library/dom"


jest.useFakeTimers()


describe("generateCredentialErrors function", ()=>{

        test("returns the correct error with invalid username", ()=>{

                const returnedError = userHelper.generateCredentialErrors(helper.invalidUsernameCreds)

                expect(returnedError.field).toEqual("username")
                expect(returnedError.message).toEqual("Username must be at least 6 characters")
        })
        test("returns correct error with invalid password", ()=>{

                const returnedError = userHelper.generateCredentialErrors(helper.invalidPasswordCreds)

                expect(returnedError.field).toEqual("password")
                expect(returnedError.message).toEqual("Password must be at least 5 characters")
        })
})
describe("showNotification function", ()=>{

        const dispatch = jest.fn()

        afterEach(()=>{
                dispatch.mockReset()
        })
        test("dispatches nothing if given a null notification", ()=>{

                userHelper.showNotification(dispatch, null)

                expect(dispatch).toHaveBeenCalledTimes(0)
        })
        test("dispatches error message if given valid error as a notification", ()=>{

                const error = helper.validError
                userHelper.showNotification(dispatch, error)

                expect(dispatch).toHaveBeenCalledTimes(1)

                const data = dispatch.mock.calls[0][0].data

                expect(data.content).toEqual(error.message)
                expect(data.header).toEqual(error.field)
        })
        test("clears notification after 5 seconds", async() =>{

                await userHelper.showNotification(dispatch, helper.validError)

                expect(setTimeout).toHaveBeenCalledTimes(1)
                expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)                
        })
})
describe("createNewUser function ", ()=>{
        const dispatch = jest.fn()
        afterEach(()=>{
                dispatch.mockReset()
        })

        test("calls on userService.createNew once", async ()=>{

                const createUserSpy = jest.spyOn(userService, "createNew")

                await userHelper.createNewUser(dispatch, helper.validCredentials)
                expect(createUserSpy).toHaveBeenCalledTimes(1)
        })
        test("calls on showNotification once", async () =>{

                const notificationSpy = jest.spyOn(userHelper, "showNotification")

                await userHelper.createNewUser(dispatch, helper.validCredentials)
                expect(notificationSpy).toHaveBeenCalledTimes(1)
        })
})
//required for rendering component
jest.mock("react-redux", ()=>({
        ...jest.requireActual("react-redux"),
        useDispatch: jest.fn()
}))

describe("page constants:", ()=>{
        const mockedDispatch = jest.fn()
        let component;
        beforeEach(()=>{
                redux.useDispatch.mockReturnValue(mockedDispatch)
                component = render(
                        <CreateUser />
                )
        })
        afterEach(()=>{
                mockedDispatch.mockReset()
        })
        test("heading content is rendered",()=>{

                const heading = component.container.querySelector("h2")
                expect(heading).toHaveTextContent("Create new user")

        })
        test("Username label is rendered",()=>{

                const usernameLabel = component.getByText("Username:")
                expect(usernameLabel).toBeDefined()
        })
        test("Password label is rendered",()=>{

                const passwordLabel = component.getByText("Password:")
                expect(passwordLabel).toBeDefined()
        })
})



//below tests need moving to a separate test file in order to be able to mock axios implementation
//if axios is mocked here, it will be necessary to rewrite all previous tests in accordance.

// ---------------------------------\\
// Integration tests\\
//- Clicking the create user button \\
// when there is no input in the form \\
// fields:
//      - calls on credentialsAreValid
//      - calls on generateErrorMessage() \\
//      - does not call on userService.createUser \\
// - Clicking the create user button \\
// with a valid username but invalid password:\\
//      - calls on credentialsAreValid \\
//      - calls on generateErrorMessage() \\
//      - does not call on userService.createUser
// -Clicking the create user button with 
// a valid username and password: \\
//      - calls on credentials are valid \\
//      - does not call on generateErrorMessage() \\
//      - calls on userService.createUser \\

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*\\
/*
describe("integration tests", ()=>{
        describe("When form submitted with empty input fields", ()=>{
                let component;
                let usernameInput;
                let passwordInput;
                let submitButton;
                let store

                const mockedFun = jest.fn()
                jest.mock("react-redux", ()=>({
                        useDispatch: ()=> mockedFun
                }))
                beforeEach(()=>{
                        store = mockStore({})
                        component = render(
                                <redux.Provider store = {store}>
                                        <CreateUser />
                                </redux.Provider>
                        )
                        usernameInput = component.container.querySelector(".username")
                        passwordInput = component.container.querySelector(".password")
                        submitButton = component.container.querySelector(".submitButton")

                })
                test("generateCredentialErrors is called", ()=>{
                        const credentialErrorsSpy = jest.spyOn(userHelper, "generateCredentialErrors")

                        fireEvent.click(submitButton)
                        expect(credentialErrorsSpy).toHaveBeenCalled()
                        
                })


        })
})
*/