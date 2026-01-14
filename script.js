fetch('medieval_jobs.json')
    .then(response => response.json())
    .then(data => {
        const selectMedievalJobs = document.getElementById('select-medieval-jobs');
        data
            .filter(job => job.literacy === "illiterate")
            .map(job => {
                const option = document.createElement('option');
                option.value = job.literacy;
                option.textContent = job.title;
                return option;
        })
        .forEach(option => selectMedievalJobs.appendChild(option));
    })
    .catch(error => {
        console.log('Error fetching the JSON file:', error);
});