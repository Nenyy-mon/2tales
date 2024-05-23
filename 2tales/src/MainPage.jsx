// import Footer from "./Footer"
// import Middle from "./Middle"

import { lazy} from "react"
// import LoadingScreen from "./Pages/LoadingPractice/LoadingScreen"

// import Navbar from "./Navbar"
const Footer = lazy(() => import('./Footer'))
const Middle = lazy(() => import('./Middle'))
const Navbar = lazy(() => import('./Navbar'))



function MainPage() {


 
    return (
        <div className="mainPage">
        <Navbar />
        <Middle />
        <Footer />
        
        </div>
    )
} 

export default MainPage
