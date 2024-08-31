import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"


function NoFoundPage() {
  return (
    <section className='text-center flex flex-col justify-center items-center h-[calc(100vh-184px)]'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='bg-green-800 hover:bg-green-700 text-white px-5 py-2 rounded mt-2'
      >
        Go Back
      </Link>
    </section>
  )
}

export default NoFoundPage