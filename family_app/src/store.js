import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import postReducer from "./reducers/postReducer"
import userReducer from "./reducers/userReducer"
import notificationReducer from "./reducers/notificationReducer"

  const reducer = combineReducers({post: postReducer, user: userReducer, notification: notificationReducer})

  const store = createStore(reducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
  )

  export default store