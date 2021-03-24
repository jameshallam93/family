import LoginForm from "./LoginForm"

import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { prettyDOM } from "@testing-library/dom"


jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}))


describe("the LoginForm component correctly renders the following elements:", ()=>{
    let component;
    let fields;

    beforeEach(()=>{
        component = render(
            <LoginForm/>
        )
        fields = component.container.querySelectorAll(".field")
    })
    test("Login Heading", ()=>{
        component.debug()
        const heading = component.container.querySelector("h2")
        expect(heading).toHaveTextContent("Login")
    })
    test("a field element for username", ()=>{
        const usernameField = fields[0]
        expect(usernameField).not.toEqual(null)
        expect(usernameField).toHaveTextContent("Username:")
    })
    test("a field element for password", ()=>{
        const usernameField = fields[1]
        expect(usernameField).not.toEqual(null)
        expect(usernameField).toHaveTextContent("Password:")
    })
    test("a submit button", ()=>{
        const button = component.container.querySelector("button")
        expect(button).not.toEqual(null)
        expect(button).toHaveTextContent("submit")
    })
})

