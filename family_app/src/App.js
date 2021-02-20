import React, { useEffect } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import {
   BrowserRouter as Router,
   Route, Switch} from "react-router-dom"


const App = () =>{


  return(
    <div>
      <Router>
        <Switch>
          <Route path = "/home">
            <Home />
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
