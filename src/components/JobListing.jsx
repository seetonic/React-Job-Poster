/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

function JobListing({ job }) {
  const [ShowFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!ShowFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div
      key={job.id}
      className="flex flex-col p-5 rounded bg-slate-100 gap-3 shadow-lg w-1/4"
    >
      <h3 className="text-slate-500">{job.type}</h3>
      <h1 className="font-bold text-lg">{job.title}</h1>
      <div>
        <a>{description}</a>
        <a onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-sm text-slate-400 font-bold hover:text-slate-600 cursor-pointer">
          {ShowFullDescription ? " Less" : " More"}
        </a>
      </div>
      <p className="text-green-600">{job.salary}</p>
      <div className="text-red-500 pt-4">
        <FaMapMarker className="inline mb-1 mr-2"/>
        {job.location}
        </div>
      <Link to={`/jobs/${job.id}`} className="bg-green-800 text-center hover:bg-green-700 text-white p-1 rounded">
        Read More
      </Link>
    </div>
  );
}

export default JobListing;
