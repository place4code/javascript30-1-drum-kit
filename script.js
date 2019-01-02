
function playSound(e) {
    let audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    let key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

    key.classList.add('playing');
    if (!audio) return; //if audio does not exists -> STOP

    audio.currentTime = 0;
    audio.play();

    console.log(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')  return; //only with transform
    this.classList.remove('playing'); // or e.originalTarget
    console.log(e);
}


let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);
