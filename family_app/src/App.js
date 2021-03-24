import React from "react"
import { useSelector } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import { Container } from "semantic-ui-react"
import styled from "styled-components"

import Home from "./components/Home"
import LoginPage from "./components/LoginPage"
import Notification from "./components/Notification"


const App = () => {

    const notification = useSelector(state => state.notification)

    return (
        <div style = {{backgroundColor:"#ca9ef0"}}>
    <Container style = {{backgroundColor:"#7c4f96", textAlign:"center"}}>

                {notification && <Notification {...notification} />}

                <Router>
                    <Switch>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    )
}

export default App;
