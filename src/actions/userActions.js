import userService from "../services/userService"
import notificationActions from "../actions/notificationActions"
import loginService from "../services/loginService"

const userActions = {

    loginUser (user)  {
        return async dispatch =>{
            const newUser = await loginService.login(user)
            dispatch({
                type:"LOGIN",
                payload:{
                    user:newUser
                }
            })
    }},

    logoutUser () {
        return({
            type:"LOGOUT"
        })
    },
    
    createNewUser (credentials) {
        return async dispatch =>{
            try{
                await userService.createNew(credentials)
                dispatch(notificationActions.showNotification({field: "success", message:`${credentials.username} was created successfully`}))
            }catch(exception){
                console.error(exception);
                dispatch(notificationActions.showNotification({field:"error", message:"Error creating account."}))
            }
        }
    }
}

export default userActions