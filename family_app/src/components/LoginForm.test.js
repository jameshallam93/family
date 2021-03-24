import LoginForm from "./LoginForm"

import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"


const currentUser = {
    username:"TomJones"
}
jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}))


describe("the LoginForm component correctly renders the following elements:", ()=>{
    let component;

    beforeEach(()=>{
        component = render(
            <LoginForm/>
        )
    })
    test("test", ()=>{
        component.debug()
    })
})

