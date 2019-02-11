function onHam() {
    document.querySelector('.links-wrapper').classList.toggle('toggle-menu');
    document.querySelector('.navbar-toggler').classList.toggle('is-active');
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('read-modal');
    // var blur = document.querySelector('body').style.opacity;
    // blur = (blur === 0.5) ? 1 : 0.5;
    // var blur = document.querySelector('body').style.opacity = blur;
    document.querySelector('.container').classList.toggle('screen');
}