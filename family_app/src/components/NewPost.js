import useField from "../hooks/useField"
import { Form } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"
import { useDispatch } from "react-redux"
import { newPostAction } from "../reducers/postReducer"
import postService from "../services/postService"


const NewPost = () =>{

    const dispatch = useDispatch()
    const content = useField("text")
    const img = useField("text")

    //temporary id generation until I link with database
    // - should be handled automatically at that stage
    const generateId = () =>{
      const id = Math.floor(Math.random() *19319)
      return id
    }

    const generatePost = () =>{
      return {
        content: content.value,
        img: img.value,
        likes:0,
        id: generateId()
      }
    }

    const createNew = async (event) =>{
      event.preventDefault()

      const post = generatePost()
      const newPost = await postService.createNew(post)
      dispatch(newPostAction(newPost))
    }

    const resetFields = (event) =>{
      event.preventDefault()
      content.onReset()
      img.onReset()
    }

    return(
    <div style = {{textAlign: "left"}}>
      <Form>
        <Form.Field>
          Post:
          <input {...content}/>
        </Form.Field>
        <Form.Field>
          Image URL:
          <input {...img}/>
        </Form.Field>
        <AnimatedButton type = "submit"
        icon = "arrow right"
        onClick = {createNew}
        />
        <AnimatedButton type = "reset"
        icon = "redo"
        onClick = {resetFields}
        />
      </Form>
    </div>
    )
  }

  export default NewPost