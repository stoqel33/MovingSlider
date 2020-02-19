import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

  const containerImg = document.querySelector('.images');
  const img1 = document.querySelector('.images__img--first img');
  const img2 = document.querySelector('.images__img--second img');


  function adjustWidth() {
    const containerWidth = containerImg.offsetWidth;

    img1.style.width = containerWidth + 'px';
    img2.style.width = containerWidth + 'px';
  }

  window.addEventListener('resize', adjustWidth)

  adjustWidth();
})