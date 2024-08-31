/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import JobListing from "./JobListing";

function JobsListing({isHome = false}) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error Fetching Data', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <section>
      <h1 className="text-center text-3xl pt-5">{isHome ? "Recent Jobs": "Browse Jobs"}</h1>
      <div className="bg-green-100 flex">
        <div className="flex gap-10 pt-10 pb-10 flex-wrap justify-center">
          {loading ? (<h2>Loading...</h2>) : (
            <>
              {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
          ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobsListing;
