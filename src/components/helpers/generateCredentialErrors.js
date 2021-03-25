
const generateCredentialErrors =  (credentials) =>{
    const {username, password} = credentials
    if (username.length < 5){
        return {field: "username", message:"Username must be at least 6 characters"}
    }
    if (password.length < 4){
        return{field:"password", message: "Password must be at least 5 characters"}
    }
    return null
}

export default generateCredentialErrors