let characterDetails = {}
let medievalJobs = []; // store all jobs

const displayCharacterDetails = document.getElementById('display-character-details');

// Helper to create a dropdown + details container
function createJobDropdown(literacy, jobs, container) {
  const section = document.createElement('div');
  section.classList.add('dropdown-section');

  // Label
  const label = document.createElement('label');
  label.textContent = `${literacy.charAt(0).toUpperCase() + literacy.slice(1)} jobs: `;
  section.appendChild(label);

  // Dropdown
  const select = document.createElement('select');
  select.innerHTML = '<option value="">Choose a job</option>';
  section.appendChild(select);

  // Details container
  const details = document.createElement('div');
  details.classList.add('job-details');
  section.appendChild(details);

  // Populate dropdown
  jobs
    .filter(job => job.literacy === literacy)
    .forEach(job => {
      const option = document.createElement('option');
      option.value = job.title;
      option.textContent = job.title;
      select.appendChild(option);
    });

  // Event listener
  select.addEventListener('change', () => {
    const job = jobs.find(j => j.title === select.value);
    
    displayCharacterDetails.innerHTML = job
      ? `<br><b>${job.title}</b>, ${job.literacy}, ${job.type}<br>${job.description}`
      : '';

    select.innerHTML = '<option value="">Choose a job</option>';
    
    // Update Character Object
    characterDetails.job_title = job.title;
    characterDetails.job_type = job.type;
    characterDetails.job_description = job.description;
    characterDetails.literacy = job.literacy;
    characterDetails.luck = job.luck;
    characterDetails.lore = job.lore;
    
    console.log(characterDetails);
  });

  container.appendChild(section);
}

// Fetch JSON and generate dropdowns dynamically
fetch('medieval_jobs.json')
  .then(res => res.json())
  .then(data => {
    medievalJobs = data;

    const container = document.getElementById('job-dropdowns-container');

    // Get unique literacy types
    const literacyTypes = [...new Set(data.map(job => job.literacy))];

    // Create dropdown for each literacy type
    literacyTypes.forEach(type => createJobDropdown(type, data, container));
  })
  .catch(err => console.error('Error fetching JSON:', err));