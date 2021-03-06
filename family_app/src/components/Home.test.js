import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter as Router } from "react-router-dom"
import * as redux from "react-redux"
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()})
import { shallow } from "enzyme"
//Renders NavBar
//Renders NewPost component
//Renders Posts components
//Renders Wall Heading
const posts = [
    {content:"test",img:"test",id:"1", likes:0},
    {content:"test2",img:"test2",id:"12", likes:0},
]

describe("correct components and elements are rendered ", ()=>{
    let wrapper;

    beforeEach(()=>{

        wrapper = shallow(
            <Router>
                <Home />
            </Router>
        )
    })

    test("Wall heading is rendered", ()=>{
        const wall = wrapper.find(".wallHeading")

        expect(wall).toBeDefined()
        expect(wall).not.toEqual(null)
    })
    test("NavBar is rendered", ()=>{
        const navBar = wrapper.find("NavBar")

        expect(navBar).toBeDefined()
        expect(navBar).not.toEqual(null)
    })
    test("NewPost component is rendered", ()=>{
        const newPost = wrapper.find("NewPost")
        
        expect(newPost).toBeDefined()
        expect(newPost).not.toEqual(null)

    })
    test("Posts component is rendered", ()=>{
        const posts = wrapper.find("Posts")
        
        expect(posts).toBeDefined()
        expect(posts).not.toEqual(null)
    })
})