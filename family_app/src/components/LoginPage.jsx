import React from "react"
import { useSelector, useDispatch } from "react-redux"
import useToggle from "../hooks/useToggle"
import AnimatedButton from "./stylised/AnimatedButton"
import NavBar from "./NavBar"
import CreateUser from "./CreateUser"
import LoginForm from "./LoginForm"
import userActions from "../actions/userActions"


const LoginPage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const [visible, visibleActions] = useToggle()

    const loginStyle = { display: visible ? "none" : "" }
    const userFormStyle = { display: visible ? "" : "none" }

    const logout = () => {
        dispatch(userActions.logoutUser())
    }

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                {currentUser ?
                    <>
                        <p className="welcome">welcome {currentUser.user.username}</p>
                        <AnimatedButton label="Log out"
                            icon="sign-out"
                            onClick={logout} />
                    </>
                    :
                    <div className="loginAndCreate">
                        <div style={loginStyle}
                            className="loginForm">
                            <LoginForm />
                            <AnimatedButton primary label="New User"
                                icon="right arrow"
                                onClick={() => visibleActions.toggle()}>
                                New User
                        </AnimatedButton>
                        </div>
                        <div style={userFormStyle}
                            className="newUserForm">
                            <CreateUser />
                            <AnimatedButton primary
                                icon="right arrow"
                                onClick={() => visibleActions.toggle()}
                                label="Login">
                                Login
                        </AnimatedButton>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginPage