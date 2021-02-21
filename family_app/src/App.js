import React, { useEffect } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import {
   BrowserRouter as Router,
   Route, Switch} from "react-router-dom"
import { Container } from "semantic-ui-react"


const App = () =>{
  const main = {
    backgroundColor:"#ca9ef0"
  }
  const container = {
    backgroundColor:"#7c4f96",
    textAlign:"center"
  }

  return(
    <div style = {main}>
    <Container style = {container}>
      <Router>
        <Switch>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
    </div>
  )
}

export default App;
