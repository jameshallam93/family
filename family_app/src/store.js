import { createStore, applyMiddleware } from "redux"
import postReducer from "./reducers/postReducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

  const store = createStore(postReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
  )

  export default store