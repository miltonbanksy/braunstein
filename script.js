const selectMedievalJobs = document.getElementById('select-medieval-jobs');
const jobDetailsContainer = document.getElementById('job-details');

let medievalJobs = [];

fetch('medieval_jobs.json')
  .then(response => response.json())
  .then(data => {
    medievalJobs = data;

    data
      .filter(job => job.literacy === "illiterate")
      .forEach(job => {
        const option = document.createElement('option');
        option.value = job.title;   // or job.id if you have one
        option.textContent = job.title;
        selectMedievalJobs.appendChild(option);
      });
  })
  .catch(error => {
    console.log('Error fetching the JSON file:', error);
  });

// // LISTENERS
selectMedievalJobs.addEventListener('change', (event) => {
  const selectedTitle = event.target.value;

  const selectedJob = medievalJobs.find(
    job => job.title === selectedTitle
  );

  if (!selectedJob) return;

  jobDetailsContainer.innerHTML = `
    <b>${selectedJob.title}</b> (${selectedJob.type})
    <br>${selectedJob.description}</br><br>
  `;
});