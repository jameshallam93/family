import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import * as redux from "react-redux"

import generateCredentialErrors from "./helpers/generateCredentialErrors"
import notificationActions from "../actions/notificationActions"
import userService from "../services/userService"
import CreateUser from "./CreateUser"
//helper module for tests.
import helper from "./testHelpers/CreateUser-helper"
// for dev
import { prettyDOM } from "@testing-library/dom"


jest.useFakeTimers()


describe("generateCredentialErrors function", ()=>{

        test("returns the correct error with invalid username", ()=>{

                const returnedError = generateCredentialErrors(helper.invalidUsernameCreds)

                expect(returnedError.field).toEqual("username")
                expect(returnedError.message).toEqual("Username must be at least 6 characters")
        })
        test("returns correct error with invalid password", ()=>{

                const returnedError = generateCredentialErrors(helper.invalidPasswordCreds)

                expect(returnedError.field).toEqual("password")
                expect(returnedError.message).toEqual("Password must be at least 5 characters")
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