import Notification from "./Notification"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter()})

const testProps = {
    header: "This is a test header",
    content:"This is test content"
}
describe("when a notification is rendered", ()=>{
    let component;
    let componentWrapper;
    beforeEach(()=>{
        component = render(
            <Notification {...testProps} />
        )
    })
    test("the header is rendered correctly", async()=>{
        const header = component.getByText("This is a test header")
        expect(header).toBeDefined()
        
    })
    test("the content is returned correctly", ()=>{
        const content = component.getByText("This is test content")
        expect(content).toBeDefined()
    })
})