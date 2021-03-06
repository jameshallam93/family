const createUserHelper = {

    invalidUsernameCreds : {
        username:"Tom",
        password: "12345678"
    },
    invalidPasswordCreds : {
        username: "bigpoppasmurf",
        password:"123"
    },
    validCredentials:{
        username:"Everybody",
        password:"password"
    },
    validError:{
            field: "username",
            message:"test message"
    }
}

export default createUserHelper