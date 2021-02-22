import { useState } from "react"


const useField = (type) =>{

    const [value, setValue] = useState("")

    const onChange = event =>{
        setValue(event.target.value)
    }
    const onReset = () =>{
        setValue("")
    }
    return {
        value, type, onChange, onReset
    }
}


export default useField