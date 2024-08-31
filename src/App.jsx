import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Mainlayout from "./layouts/Mainlayout";
import Jobpage from "./pages/Jobpage";
import About from "./pages/About";
import NoFoundPage from "./pages/NoFoundPage";
import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";

function App() {
  //add New Job
  const addNewJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //update Job
  const updatedJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobpage />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addNewJob} />} />
        <Route
          path="/jobs/:id"
          element={<SingleJobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-jobs/:id"
          element={<EditJob updateJobSubmit={updatedJob} />}
          loader={jobLoader}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
