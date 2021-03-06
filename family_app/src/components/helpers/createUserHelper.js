import userService from "../../services/userService"
import notificationActions from "../../actions/notificationActions"


const userHelper = {


    generateCredentialErrors (credentials) {
        const {username, password} = credentials
        if (username.length < 5){
            return {field: "username", message:"Username must be at least 6 characters"}
        }
        if (password.length < 4){
            return{field:"password", message: "Password must be at least 5 characters"}
        }
        return null
    },
    showNotification (dispatch, notification) {
        
        if (notification=== null){
            return
        }
        dispatch(notificationActions.setNotification(notification.field, notification.message))
        setTimeout(()=>{
            dispatch(notificationActions.clearNotification())
        }, 5000)
        
    },
    async createNewUser (dispatch, credentials) {

        try{
            await userService.createNew(credentials)

            this.showNotification(dispatch, {field: "success", message:`${credentials.username} was created successfully`})

        } catch (exception){
            console.log(exception)
        }
    }
    }


export default userHelper