import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Gallery from './Pages/Gallery'
import AboutUs from './Pages/AboutUs'
// eslint-disable-next-line react-refresh/only-export-components
const MainPage = lazy(() => import('./MainPage'))
// eslint-disable-next-line react-refresh/only-export-components
const Scrolling = lazy(() => import('./Pages/Scrolling'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<MainPage/>} /> 
      <Route path="/2tales" element={<MainPage/>} /> 
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/shop" element={<MainPage/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Scrolling/>} />
    </Routes>
   </main>
    </BrowserRouter>
  </React.StrictMode>,
)
