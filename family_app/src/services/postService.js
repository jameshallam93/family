import axios from "axios"
const baseUrl = "http://localhost:3001/api/posts"


const get = async (id) =>{
    const response = await axios.get(`${baseUrl}/${id}`)

    return response.data
}

const getAll = async () =>{
    const response = await axios.get(baseUrl)

    return response.data
}

const createNew = async (post) =>{
    const config = {}

    const response = await axios.post(baseUrl, post, config)

    return response.data
}

const update = async (post) =>{

    //will need to refactor this once other update methods are implemented (i.e.change content/img src)
    const postWithIncrementedLikes = incrementLikes(post)

    const response = await axios.put(`${baseUrl}/${post.id}`, postWithIncrementedLikes)

    return response.data
}

const incrementLikes = (object) =>{
    
    const newObject = {
        ...object,
        likes: object.likes + 1
    }
    return newObject
}

export default {

    get,
    getAll,
    createNew,
    update
}