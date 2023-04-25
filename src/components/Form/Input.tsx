import { InputInterface } from "../../interfaces/InputInterface"
import React from "react"

const Input:React.FC<InputInterface> = ({type,value,name,inputProps}) => {
    return (
        <input type={type} placeholder={value} name={name} ref={inputProps} />
    )
}

export default Input