import { useDispatch } from "react-redux"
import Links from "./Links"
import Posts from "./Posts"
import NewPost from "./NewPost"
import { newPostAction } from "../reducers/postReducer"


const Home = () =>{
  
    const dispatch = useDispatch()
  
    const createNewPost = (post) =>{
      dispatch(newPostAction(post))
      return
    }
    
    return(
      <div>
        <Links/>
        <h2 style = {{backgroundColor:"black",
      color:"white"}}>Wall</h2>
        <Posts/>
        <NewPost handleNew = {createNewPost}/>
      </div>
    )
  }

  export default Home