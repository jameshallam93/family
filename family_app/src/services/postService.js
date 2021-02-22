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
//maybe move updating of likes to server side 
//- return updated post to updateLikes function and then pass on from here
//definitely implement above when database is linked
const updateLikes = async (id) =>{

    const postToUpdate = await axios.get(`${baseUrl}/${id}`)
    const newLikes = postToUpdate.data[0].likes + 1

    const updatedPost = {...postToUpdate.data[0],
    likes:newLikes}

    const response = await axios.put(`${baseUrl}/${id}`, updatedPost)
    return response.data
}

export default {

    get,
    getAll,
    createNew,
    updateLikes
}