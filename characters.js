const canvas = document.getElementById('animation-canvas');
const frameMainTitle = document.getElementById('frame-main-title');
const frameMainSubTitle = document.getElementById('frame-main-sub-title');

function main() {
    createTitle();
    createSubTitle();
    //createFrameLiterate();
}

function createTitle() {
    const mainTitle = document.createElement('p');
    mainTitle.textContent = "Barons of Braunstein";
    mainTitle.classList.add('main-title', 'manufacturing-consent-regular');
    frameMainTitle.appendChild(mainTitle);
}

function createSubTitle() {
    const mainSubTitle = document.createElement('p');
    mainSubTitle.textContent = "Character Generator";
    mainSubTitle.classList.add('main-sub-title', 'manufacturing-consent-regular');
    frameMainSubTitle.appendChild(mainSubTitle);
}

function createFrameLiterate() {
    const frame = document.createElement('div');
    frame.classList.add('circle');
    frame.textContent = "LITERATE";
    canvas.appendChild(frame);
}



main();