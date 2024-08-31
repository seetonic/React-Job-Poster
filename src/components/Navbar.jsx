import { NavLink } from "react-router-dom"

function Navbar() {

  const linkClass = ({isActive}) => 
    isActive ? 'text-gray-600 font-medium' : 'hover:text-gray-600 font-medium cursor-pointer'

  return (
    <nav className="flex justify-between py-4 px-8 bg-green-400">
        <h1 className="text-3xl font-bold cursor-pointer"><NavLink to='/'>Logo</NavLink></h1>
        <ul className="flex gap-5 items-center">
            <li><NavLink className={linkClass} to="/">Home</NavLink></li>
            <li><NavLink className={linkClass} to="/about">About</NavLink></li>
            <li><NavLink className={linkClass} to="/jobs">Job Post</NavLink></li>
            <li className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded"><NavLink to='/add-job'>Add Jobs</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar