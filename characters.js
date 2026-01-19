const buttonCharacterStart = document.getElementById('button-character-start');
const containerMainTitle = document.getElementById('container-main-title');

buttonCharacterStart.addEventListener('click', () => {
    containerMainTitle.classList.add('glide-up');
});