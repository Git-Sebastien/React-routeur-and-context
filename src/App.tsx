import './App.css';
import Form from './components/Form/Form';

import { NavLink } from 'react-router-dom';
import React from 'react';


const App:React.FC = () => {
  return (
    <>
    <h2>Ajouter une recette</h2>
    <NavLink to="recettes">
      <h3>Vois les recettes</h3>
    </NavLink>

    <Form></Form>
    </>
  )
}

export default App
