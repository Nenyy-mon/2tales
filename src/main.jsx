import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// eslint-disable-next-line react-refresh/only-export-components
const MainPage = lazy(() => import('./MainPage'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/gallery" element={<MainPage/>} />
      <Route path="/shop" element={<MainPage/>} />
      <Route path="/about" element={<MainPage/>} />
      <Route path="/contact" element={<MainPage/>} />
    </Routes>
   </main>
    </BrowserRouter>
  </React.StrictMode>,
)
