
const notificationActions = {

    setNotification (field, message) {
        return (
            {
                type: "SET_NOTIFICATION",
                payload:{
                    field,
                    message
                }
            }
        )
    },
    showNotification (notification) {
        if (notification ===  null){
            return null;
        }
        const field = notification.field
        const message = notification.message

        return async dispatch =>{            
            dispatch(this.setNotification(field, message))
            setTimeout(()=>{
                dispatch(this.clearNotification())
            }, 3000)
        }
    }
    ,

    clearNotification () {
        return(
            {
                type: "CLEAR_NOTIFICATION"
            }
        )
    }
}

export default notificationActions