import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function Mainlayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
        <Footer/>
    </>
  )
}

export default Mainlayout