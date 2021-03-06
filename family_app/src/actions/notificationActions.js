
const notificationActions = {

    setNotification (header, content) {

        return (
            {
                type: "SET_NOTIFICATION",
                data:{
                    header,
                    content
                }
            }
        )
    },

    clearNotification () {
        return(
            {
                type: "CLEAR_NOTIFICATION"
            }
        )
    }
}
export default notificationActions