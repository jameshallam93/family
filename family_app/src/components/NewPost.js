import useField from "../hooks/useField"



const NewPost = ({handleNew}) =>{

    const content = useField("text")
    const img = useField("text")

    const createNew = (event) =>{
        
      event.preventDefault()

      const post = {
        content: content.value,
        img: img.value,
        likes:0
      }
      handleNew(post)
    }

    return(
    <div>
      <form onSubmit = {createNew}>
        <div>
        Post:
        <input {...content}/>
        </div>
        <div>
        Image URL:
        <input {...img}/>
        </div>
        <button type = "submit">submit</button>
      </form>
    </div>
    )
  }

  export default NewPost