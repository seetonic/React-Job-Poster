
import { Link } from "react-router-dom"
import Cards from "./cards"

function HomeCard() {
  return (
    <div className="flex py-8 px-24 gap-10 justify-center flex-wrap md:flex-nowrap">
        <Cards>
            <h1 className="text-2xl mb-5">For Developers</h1>
            <p>Browse our React jobs and start your career today</p>
            <button className="mt-5 bg-black text-white hover:bg-slate-800 hover:text-white px-3 py-1 rounded"><Link to='/jobs'>Browse Jobs</Link></button>
        </Cards>
        <Cards bg="bg-green-100">
            <h1 className="text-2xl mb-5">For Employers</h1>
            <p>List your Job to find the perfect developer for the role</p>
            <button className="mt-5 bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded"><Link to='/add-job'>Add Jobs</Link></button>
        </Cards>
    </div>
  )
}

export default HomeCard