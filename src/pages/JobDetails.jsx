import React from 'react'

function JobDetails() {
  return (
    <div className='home-section' style={{width:'100%',border:'1px solid', margin:'0px', padding:'0px', height:'100vh'}}>
        <p className='home' style={{color:'red', width:'100%'}}>Job Details</p>
        <h1>hello world</h1>
        <p><Link to="/jobdetails">JobDetails</Link></p>
    </div>
  )
}

export default JobDetails