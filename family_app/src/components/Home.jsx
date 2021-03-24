import NavBar from "./NavBar"
import Posts from "./Posts"
import NewPost from "./NewPost"

const Home = () =>{
    return(
      <div>
        <NavBar/>
        <h2 className = "wallHeading"
        style = {{backgroundColor:"black",
        color:"white"}}>
          Wall
        </h2>
        <NewPost/>
        <Posts/>
      </div>
    )
  }

  export default Home