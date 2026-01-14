fetch('medieval_jobs.json')
    .then(response => response.json()
    .then(data => {
        /*
        // Print List on screen
        const container = document.getElementById('data-container');
        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `Title: ${item.title}`;
            container.appendChild(div);
        });
        */
        const selectMedievalJobs = document.getElementById('select-medieval-jobs');
        data.forEach(item => {
            const option = document.createElement('option');
            option.textContent = `${item.title}`;
            selectMedievalJobs.appendChild(option);
        });
    })
    .catch(error => {
        console.log('Error fetching the JSON file:', error);
    })
)