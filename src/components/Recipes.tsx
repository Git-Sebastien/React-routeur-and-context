import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Link } from "react-router-dom";


const Recipes: React.FC = () => {

    const {formData} = useContext(FormContext);

    console.log(formData)
  return (
    <>
        {
            formData.map((element,index) => 
            <li key={index}>
                Recette :  {element.recette} -
                Ingrédient :  {element.ingredient}
            </li>)
        }
    </>
  );
};

export default Recipes;