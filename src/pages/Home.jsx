import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

function Home() {
  return (
    <>
        <Hero/>
        <HomeCard/>
        <JobsListing isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default Home