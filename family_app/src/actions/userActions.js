const userActions = {

    loginUser (user)  {
        return({
            type:"LOGIN",
            data:{
                user
            }
        })
    },
    logoutUser () {
        return({
            type:"LOGOUT"
        })
    }
}

export default userActions