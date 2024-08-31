import { Link } from "react-router-dom"


function ViewAllJobs() {
  return (
    <div className="flex justify-center pt-10 p-10">
        <Link
          to='/jobs'
          className="text-white bg-black text-center px-28 py-2 rounded shadow-sm hover:bg-slate-800"
        >
          View All Jobs
        </Link>
      </div>
  )
}

export default ViewAllJobs