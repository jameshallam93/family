import { Form } from "semantic-ui-react"
import { useDispatch } from "react-redux"

import LeftAlignedDiv from "./styled/LeftAlignDiv"
import useField from "../hooks/useField"
import AnimatedButton from "./semanticUI/AnimatedButton"
import notificationActions from "../actions/notificationActions"
import postActions from "../actions/postActions"
import { generatePost, generatePostErrors } from "./helpers/newPostHelper"

const NewPost = () => {
    
    const dispatch = useDispatch()
    const content = useField("text")
    const img = useField("text")

    const createNew = async (event) => {

        event.preventDefault()

        const post = generatePost(content.value, img.value)

        const postError = generatePostErrors(post)

        if (postError) {
            dispatch(notificationActions.showNotification(postError))
            return
        }
        await dispatch(postActions.createNewPost(post))
        await dispatch(postActions.initPostsAction())
        resetFields()
    }

    const resetFields = (event) => {
        event.preventDefault()

        content.onReset()
        img.onReset()
    }

    return (
        <LeftAlignedDiv>
            <Form>
                <Form.Field>
                    Post:
          <input {...content} />
                </Form.Field>
                <Form.Field>
                    Image URL:
          <input {...img} />
                </Form.Field>
                <AnimatedButton type="submit"
                    icon="arrow right"
                    onClick={createNew}
                />
                <AnimatedButton type="reset"
                    icon="redo"
                    onClick={resetFields}
                />
            </Form>
        </LeftAlignedDiv>
    )
}

export default NewPost