/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";


function SingleJobPage({deleteJob}) {
    const {id} = useParams();
    const job = useLoaderData()
    const navigate = useNavigate()

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are your sure you want to delete this Job?')

        if(!confirm) return

        deleteJob(jobId)

        toast.success("Job Delete Successfully", {
            icon: false,
            style: {
              backgroundColor: '#333',  // Background color of the toast
              color: '#fff',            // Text color
            },
            progressStyle: {
              backgroundColor: 'red',  // Progress bar color
            }
          })

        navigate('/jobs')
    }

  return (
    <section>
        <div className="p-5 bg-white">
            <Link to={'/jobs'} className="text-green-600 hover:text-green-700 cursor-pointer flex items-center">
            <FaArrowLeft className="mr-3"/>Back to Job Listing</Link>
        </div>
        <div className="flex p-5 gap-5 bg-green-50">
            <div className="flex-1">
                <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                    <h3 className="text-slate-400 font-bold">{job.type}</h3>
                    <h1 className="mt-2 mb-2 text-3xl text-green-700 font-bold">{job.title}</h1>
                    <span className="flex items-center">
                    <FaLocationPin className="text-red-500 mr-2"/>
                    <p className="font-bold text-red-500">{job.location}</p>
                    </span>
                </div>
                <div  className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="mb-5 text-green-700 text-lg">Job description</h3>
                    <p>{job.description}</p>
                    <h3 className="mb-2 mt-5 text-green-700 text-lg">Salary</h3>
                    <p>{job.salary}</p>
                </div>
            </div>
            <div className="basis-1/3">
                <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                    <h3 className="text-lg font-bold mb-2">Company Info</h3>
                    <h3 className="text-2xl mb-1">{job.company.name}</h3>
                    <p>{job.company.description}</p>
                    <h3 className="text-lg mt-3">Contact Email:</h3>
                    <p className="p-1 bg-green-200 font-bold">{job.company.contactEmail}</p>
                    <h3 className="text-lg mt-3">Contact Phone:</h3>
                    <p className="p-1 bg-green-200 font-bold">{job.company.contactPhone}</p>
                </div>
                <div className="flex flex-col bg-white p-5 rounded-lg shadow-md mb-5">
                    <h3 className="font-bold text-lg mb-2">Manage Jobs</h3>
                    <Link to={`/edit-jobs/${job.id}`} className="p-2 bg-green-600 rounded shadow-sm text-white mb-2 text-center hover:bg-green-700">Edit Job</Link>
                    <button onClick={() => onDeleteClick(job.id)} className="p-2 bg-red-600 rounded shadow-sm text-white mb-2 text-center hover:bg-red-700">Delete Job</button>
                </div>
            </div>
        </div>
    </section>
  )
}

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {SingleJobPage as default, jobLoader}