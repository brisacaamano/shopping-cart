import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartApp } from './ShoppingCartApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingCartApp/>
    </React.StrictMode>
  </BrowserRouter>
)
