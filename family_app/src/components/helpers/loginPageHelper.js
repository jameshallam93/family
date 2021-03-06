import userActions from "../../actions/userActions"

const loginHelper = {
    dispatchLogout (dispatch) {
        dispatch(userActions.logoutUser())
    }
}

export default loginHelper