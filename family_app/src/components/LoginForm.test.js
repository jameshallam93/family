import "@testing-library/jest-dom/extend-expect"
import LoginForm from "./LoginForm"
import loginHelper from "./helpers/loginFormHelper"
import loginService from "../services/loginService"
import userActions from "../actions/userActions"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()})
import { shallow } from "enzyme"

const currentUser = {
    username:"TomJones"
}
jest.mock("../services/loginService", ()=>({
    ...jest.requireActual("../services/loginService"),
    login: jest.fn(()=>currentUser)
}))


describe("the loginhelper/loginUser function, ", ()=>{
    const mockedDispatch = jest.fn()
    afterEach(()=>{
        mockedDispatch.mockClear()
        jest.resetModules()
    })
    test("calls on loginService/login once",async()=>{

        await loginHelper.loginUser(mockedDispatch, currentUser)
        expect(loginService.login).toHaveBeenCalledTimes(1)

        })
    test("calls on userActions/loginUser once", async ()=>{

        const userActionSpy = jest.spyOn(userActions, "loginUser")

        await loginHelper.loginUser(mockedDispatch, currentUser)
        expect(userActionSpy).toHaveBeenCalledTimes(1)
    })
    test("calls on dispatch once", async ()=>{

        await loginHelper.loginUser(mockedDispatch, currentUser)
        expect(mockedDispatch).toHaveBeenCalledTimes(1)
    })
})

