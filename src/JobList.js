// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/jobs')
//       .then(response => setJobs(response.data))
//       .catch(error => console.error('Error fetching jobs:', error));
//   }, []);

//   return (
//     <div className="job-list">
//       {jobs.map((job) => (
//         <a href={job.affiliateLink} key={job._id} target="_blank" rel="noopener noreferrer">
//           <div className="job-card">
//             <h3>{job.title}</h3>
//             <p>{job.company}</p>
//             <p>{job.location}</p>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default JobList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          {/* Add a clickable link labeled as 'Apply Now' */}
          <a href={job.affiliateLink} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
