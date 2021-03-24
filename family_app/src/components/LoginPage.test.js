import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import LoginPage from "./LoginPage"
import * as redux from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"



jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}))
describe("when user is defined ", ()=>{
    const selectorSpy = jest.spyOn(redux, "useSelector")
    let component;
    beforeEach(()=>{

        selectorSpy.mockReturnValue({user:{username:"TomJones"}})

        component = render(
            <Router>
                <LoginPage />
            </Router>
        )
    })
    afterEach(()=>{
        selectorSpy.mockClear()
        })
    
    test("Welcome message is rendered", ()=>{

        const welcomeMessage = component.container.querySelector(".welcome")
        expect(welcomeMessage).toHaveTextContent("TomJones")
    })
    test("Login form is not rendered", ()=>{
        
        const loginForm = component.container.querySelector(".loginAndCreate")
        expect(loginForm).toEqual(null)
        
    })

})
describe("when user is not defined", ()=>{
    const selectorSpy = jest.spyOn(redux, "useSelector")
    let component;

    beforeEach(()=>{
        component = render(
            <Router>
                <LoginPage />
            </Router>
        )
    })

    test("Welcome message is not rendered", ()=>{
        const welcomeMessage = component.container.querySelector(".welcome")
        expect(welcomeMessage).toEqual(null)
    })
    test("Login form is rendered", ()=>{

        const loginForm = component.container.querySelector(".loginForm")

        expect(loginForm).toHaveTextContent("New User")

    })
    // TO WRITE - TESTS TO DETERMINE THE STYLE PROP OF EACH COMPONENT - DETERMINE IF THEY ARE SET TO VISIBLE OR NOT
})

