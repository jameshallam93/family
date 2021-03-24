import axios from "axios"
const baseUrl = "http://localhost:3001/api/posts"

const postService = {
    async get(id) {
        const response = await axios.get(`${baseUrl}/${id}`)

        return response.data
    },
    async getAll() {
        const response = await axios.get(baseUrl)

        return response.data
    },
    async createNew(post) {
        const config = {}

        const response = await axios.post(baseUrl, post, config)

        return response.data
    },
    async update(post) {
        const postWithIncrementedLikes = this.incrementLikes(post)

        const response = await axios.put(`${baseUrl}/${post.id}`, postWithIncrementedLikes)

        return response.data
    },
    incrementLikes(object) {
        const newObject = {
            ...object,
            likes: object.likes + 1
        }
        return newObject
    }

}
export default postService
