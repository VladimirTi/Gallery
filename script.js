document.querySelector('#thumbs').addEventListener('click', (event) => {
  event.preventDefault();
  const targetElement = event.target;
  const targetSrc = targetElement.getAttribute('src');
  const largeImg = document.querySelector('#largeImg');

  if (targetSrc) {
    largeImg.setAttribute('src', targetSrc);
    largeImg.setAttribute('alt', targetElement.parentElement.getAttribute('title'));
  }
});
