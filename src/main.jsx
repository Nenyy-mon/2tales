import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/scrollbar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./MainPage.jsx"
import Gallery from './Pages/Gallery.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<MainPage/>} /> 
      <Route path="/2tales" element={<MainPage/>} /> 
      <Route path="/2tales/gallery" element={<Gallery/>} />
      <Route path="/2tales/shop" element={<Shop/>} />
      <Route path="/2tales/about" element={<AboutUs/>} />
      <Route path="/2tales/shop" element={<Shop/>} />
      <Route path="/2tales/cart" element={<Cart/>} />
    </Routes>
   </main>
    </BrowserRouter>
  </React.StrictMode>,
)
