import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FormContextProvider } from './context/FormContext'
import Recipes from '../src/components/Recipes.js'





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <FormContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/recettes' element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
)
