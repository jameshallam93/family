import useField from "../hooks/useField"
import { Form } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"
import { useDispatch } from "react-redux"
import postActions from "../actions/postActions"
import helper from "./helpers/newPostHelper"
const { newPostAction } = postActions

const NewPost = () =>{

    const dispatch = useDispatch()
    const content = useField("text")
    const img = useField("text")

    const createNew = async (event) =>{

      event.preventDefault()

      const post = helper.generatePost(content.value, img.value)
      console.log(post)
      const postErrors = helper.generatePostErrors(post)

      if(postErrors){
        helper.showNotification(dispatch, postErrors)
        return
      }
      await helper.createNewPost(dispatch, post)
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