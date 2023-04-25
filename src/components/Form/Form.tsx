import Input from "./Input"
import Button from "../Button"
import { FormInterface } from "../../interfaces/FormInterafce"
import React,{FormEvent, useContext, useRef,useState} from "react"
import {useNavigate} from "react-router-dom"
import { FormContext } from "../../context/FormContext"



const Form:React.FC = () => {

    const recipeIngredient = useRef<HTMLInputElement>(null)
    const recipeRecette = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const { formData,setFormData } = useContext(FormContext);

    const next = () => {
        navigate("/recettes")
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        if(recipeIngredient.current && recipeRecette.current){
            const newFormData = {recette: recipeRecette.current.value, ingredient: recipeIngredient.current.value};
            setFormData(prevFormData => [...prevFormData, newFormData]);
            console.log(formData)
        }
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={recipeRecette}/>
                <input type="text" ref={recipeIngredient}/>
                <button type="submit">Valider</button>
            </form>
            <button onClick={next}>Page de recettes</button>
        </>
    )

}

export default Form


// const Form:React.FC<FormInterface> = ({action}) => {
//     const inputRecipe = React.useRef<HTMLInputElement>(null);
//     const inputIngredient = React.useRef<HTMLInputElement>(null);
//     const [formValues, setFormValues] = useState<React.SetStateAction<{}>>({ recette: '', ingredient: '' });

//     const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
//         event.preventDefault()
//         const newFormValues = {
//             recette: inputRecipe.current?.value || '',
//             ingredient: inputIngredient.current?.value || '',
//           };
//         setFormValues(newFormValues);
//     }

