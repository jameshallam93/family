import axios from "axios"
const baseUrl = "http://localhost:3001/api/users"

const userService = {
    async get(id) {
        const response = axios.get(`${baseUrl}/${id}`)
        return response.data
    },
    async getAll() {
        const response = axios.get(baseUrl)
        return response.data
    },
    async createNew(user) {
        const response = axios.post(baseUrl, user)
        return response.data
    }
}

export default userService