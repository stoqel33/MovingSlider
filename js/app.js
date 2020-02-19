import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

  const containerImg = document.querySelector('.images');
  const img1 = document.querySelector('.images__img--first img');
  const img2 = document.querySelector('.images__img--second img');
  let dragging = false;
  const img1Container = document.querySelector('.images__img--first');
  const img2Container = document.querySelector('.images__img--second');
  const rope = document.querySelector('.images__rope');
  const handle = document.querySelector('.images__hanlde');
  let containerLeft;
  let containerWidth;

  function getOffset(clientX) {
    const offset = clientX - containerLeft;
    if (offset < 0) return 0;
    else if (offset > containerWidth) return containerWidth;
    else return offset;
  }

  function move(clientX) {
    const offset = getOffset(clientX)
    const positionRope = (offset / containerWidth * 100);
    rope.style.left = `${positionRope}%`;
    img2Container.style.width = `${positionRope}%`;
  }

  function initEvents() {
    rope.addEventListener('mousedown', () => {
      dragging = true;
    });

    rope.addEventListener('mouseup', () => {
      dragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (dragging) {
        move(e.clientX)
      }
    })
    rope.addEventListener('touchstart', () => {
      dragging = true;
    });

    rope.addEventListener('touchend', () => {
      dragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (dragging) {
        move(e.touches[0].clientX)
      }
    })
  }


  function adjustWidth() {
    containerWidth = containerImg.offsetWidth;
    containerLeft = containerImg.offsetLeft;

    img1.style.width = containerWidth + 'px';
    img2.style.width = containerWidth + 'px';
  }

  window.addEventListener('resize', adjustWidth)

  adjustWidth();

  initEvents();
})