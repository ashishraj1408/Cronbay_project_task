// import React, {useEffect, useState} from "react";
// import JobCard from "../../../components/JobCard";


// const Home = () => {
//     const [jobs, setJobs] = useState([]);
  
//     useEffect(()=>{
//         const fetchJobs = async () => {
//             const response = await fetch("http://localhost:3001/jobs");
//             const data = await response.json();
//             setJobs(data);
//         }
//         fetchJobs();
//     },[])
//     return(
//         <div>
//             <h1>Available Jobs</h1>
//             {jobs.map(job => <JobCard key={job.id} job={job} />)}
//         </div>
//     )
// }

// export default Home;


import React from 'react'
// import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className='home-section' style={{width:'100%',border:'1px solid', margin:'0px', padding:'0px', height:'100vh'}}>
        <p className='home' style={{color:'red', width:'100%'}}>home</p>
        <h1>hello world</h1>
        <Button variant="contained">Check</Button>
        {/* <p><Link to="/jobdetails">JobDetails</Link></p> */}
    </div>
    
  )
}

export default Home