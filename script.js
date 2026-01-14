const selectMedievalJobsIlliterate = document.getElementById('select-medieval-jobs-illiterate');
const selectMedievalJobsLiterate = document.getElementById('select-medieval-jobs-literate');
const jobDetailsIlliterate = document.getElementById('job-details-illiterate');
const jobDetailsLiterate = document.getElementById('job-details-literate');

let medievalJobs = [];

selectMedievalJobsIlliterate.innerHTML = '<option value="">Choose a job</option>';
selectMedievalJobsLiterate.innerHTML = '<option value="">Choose a job</option>';

function fetchJobsJSON(literacy, dropdownTarget) {
    fetch('medieval_jobs.json')
        .then(response => response.json())
        .then(data => {
            medievalJobs = data;

            data
                .filter(job => job.literacy === literacy)
                .forEach(job => {
                    const option = document.createElement('option');
                    option.value = job.title;   // or job.id if you have one
                    option.textContent = job.title;
                    dropdownTarget.appendChild(option);
            });
        })
        .catch(error => {
            console.log('Error fetching the JSON file:', error);
    });
}


// // LISTENERS
selectMedievalJobsIlliterate.addEventListener('change', (event) => {
  const selectedTitle = event.target.value;

  const selectedJob = medievalJobs.find(
    job => job.title === selectedTitle
  );

  if (!selectedJob) return;

  jobDetailsIlliterate.innerHTML = `
    <b>${selectedJob.title}</b> (${selectedJob.type})
    <br>${selectedJob.description}</br><br>
  `;
});

selectMedievalJobsLiterate.addEventListener('change', (event) => {
  const selectedTitle = event.target.value;

  const selectedJob = medievalJobs.find(
    job => job.title === selectedTitle
  );

  if (!selectedJob) return;

  jobDetailsLiterate.innerHTML = `
    <b>${selectedJob.title}</b> (${selectedJob.type})
    <br>${selectedJob.description}</br><br>
  `;
});


fetchJobsJSON("illiterate", selectMedievalJobsIlliterate);
fetchJobsJSON("literate", selectMedievalJobsLiterate);