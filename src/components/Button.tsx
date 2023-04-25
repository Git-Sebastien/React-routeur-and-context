import { ButtonInterface } from "../interfaces/ButtonInterface"


const Button:React.FC<ButtonInterface> = ({type,purpose,handleClick}) => {
    return <button type={type} onClick={handleClick}>{purpose}</button>
}

export default Button