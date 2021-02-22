import Links from "./Links"
import Posts from "./Posts"
import NewPost from "./NewPost"



const Home = () =>{
  
    return(
      <div>
        <Links/>
          <h2 style = {{backgroundColor:"black",
          color:"white"}}>
            Wall
          </h2>
          <Posts/>
        <NewPost/>
      </div>
    )
  }

  export default Home