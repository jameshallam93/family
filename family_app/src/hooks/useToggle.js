import React, { useState } from "react"

const useToggle = (visibleInitially = false) =>{

    const [visible, setVisible] = useState(visibleInitially)

    return[
        visible,
        {
            set:setVisible,
            toggle: () => setVisible(!visible)
        }
    ]
}

export default useToggle