import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Products/Product.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<App/>}/>
        <Route path = '/:category_name' element = {<Product/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
