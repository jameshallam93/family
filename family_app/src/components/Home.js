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
        <h2>Wall</h2>
        <Links/>
        <Posts/>
        <NewPost handleNew = {createNewPost}/>
      </div>
    )
  }

  export default Home