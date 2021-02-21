import useField from "../hooks/useField"
import { Button, Icon, Form } from "semantic-ui-react"
import AnimatedButton from "./stylised/AnimatedButton"


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

    const resetFields = (event) =>{
      event.preventDefault()
      content.reset()
      img.reset()
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
        onClick = {createNew}/>
       <AnimatedButton type = "reset"
       icon = "redo"
       onClick = {resetFields}/>
      </Form>
    </div>
    )
  }

  export default NewPost