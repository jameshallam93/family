import Notification from "./Notification"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"


const testProps = {
    field: "This is a test header",
    message:"This is test content"
}
describe("when a notification is rendered", ()=>{
    let component;

    beforeEach(()=>{
        component = render(
            <Notification {...testProps} />
        )
    })
    test("the header is rendered correctly", async()=>{
        component.debug()
        const header = component.getByText("This is a test header")
        expect(header).toBeDefined()
        
    })
    test("the content is returned correctly", ()=>{
        const content = component.getByText("This is test content")
        expect(content).toBeDefined()
    })
})