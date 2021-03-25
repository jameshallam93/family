import React from "react"
import { useSelector } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import Home from "./components/Home"
import LoginPage from "./components/LoginPage"
import Notification from "./components/Notification"
import StyledDiv from "./components/styled/StyledAppDiv"
import StyledContainer from "./components/styled/StyledContainer"

const App = () => {

    const notification = useSelector(state => state.notification)

    return (
        <StyledDiv>
            <StyledContainer>
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
            </StyledContainer>
        </StyledDiv>
    )
}

export default App;
