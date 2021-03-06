import loginService from "../../services/loginService"
import userActions from "../../actions/userActions"

const loginHelper = {
    async loginUser (dispatch, user) {

            const newUser = await loginService.login(user)

            dispatch(userActions.loginUser(newUser))
    }
}

export default loginHelper