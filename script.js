let characterDetails = {};
let medievalJobs = [];
let magicDetails = [];
let armorDetails = [];
let weaponDetails = [];

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
  const selectJob = document.createElement('select');
  selectJob.innerHTML = '<option value="">Choose a job</option>';
  section.appendChild(selectJob);

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
      selectJob.appendChild(option);
    });

  selectJob.addEventListener('change', () => {
    const job = jobs.find(j => j.title === selectJob.value);
    
    displayCharacterDetails.innerHTML = job
      ? `<br><b>${job.title}</b>, ${job.literacy}, ${job.type}<br>${job.description}`
      : '';

    //selectJob.innerHTML = '<option value="">Choose a job</option>';
    
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
    console.log(literacyTypes)

    // Create dropdown for each literacy type
    literacyTypes.forEach(type => createJobDropdown(type, data, container));
  })
  .catch(err => console.error('Error fetching JSON:', err));


fetch('magic.json').then(res => res.json()).then(data => {
  magicDetails = data;
  const selectMagic = document.getElementById('select-magic');
  selectMagic.innerHTML = '<option value="">Choose...</option>';
  data.forEach(magic => {
    const option = document.createElement('option');
    option.value = magic.magic;
    option.textContent = magic.magic;
    selectMagic.appendChild(option);
  })

  selectMagic.addEventListener('change', () => {
    const job = magicDetails.find(j => j.magic === selectMagic.value);
    const displayMagicDetails = document.getElementById('display-magic-details');
    displayMagicDetails.innerHTML = job
    ? `<b>${job.magic}</b>, ${job.details}`
    : '';
    
    // Update Character Object
    characterDetails.magic_type = job.magic;
    characterDetails.magic_details = job.details;
  });
})

fetch('armor.json').then(res => res.json()).then(data => {
  armorDetails = data;
  const selectArmor = document.getElementById('select-armor');
  selectArmor.innerHTML = `<option value="">Choose...</option>`;
  data.forEach(armor => {
    const option = document.createElement('option');
    option.value = armor.type;
    option.textContent = `(${armor.rule}) ${armor.type}`;
    selectArmor.appendChild(option);
  });

  selectArmor.addEventListener('change', () => {
    const job = armorDetails.find(j => j.type === selectArmor.value);
    const displayArmorDetails = document.getElementById('display-armor-details');
    displayArmorDetails.innerHTML = job
    ? `<b>${job.type}</b>, ${job.defence}`
    : '';
    
    // Update Character Object
    characterDetails.armor_type = job.type;
    characterDetails.armor_defence = job.defence;
    characterDetails.armor_move = job.move;
    characterDetails.armor_climb = job.climb;
    characterDetails.armor_penalty = job.penalty;
  });
});

fetch('weapons.json').then(res => res.json()).then(data => {
  weaponDetails = data;
  const selectWeapon = document.getElementById('select-weapon');
  selectWeapon.innerHTML = `<option value="">Choose...</option>`;
  data.forEach(weapon => {
    const option = document.createElement('option');
    option.value = weapon.name;
    option.textContent = weapon.name;
    selectWeapon.appendChild(option);
  });

  selectWeapon.addEventListener('change', () => {
    const job = weaponDetails.find(j => j.name === selectWeapon.value);
    const displayWeaponDetails = document.getElementById('display-weapon-details');
    displayWeaponDetails.innerHTML = job ? `<b>${job.name}` : '';

    characterDetails.weapon_name = job.name;
    characterDetails.weapon_range = job.range;
    characterDetails.weapon_shield = job.shield;
    characterDetails.weapon_damage_bonus = job.damage_bonus;
  });
});