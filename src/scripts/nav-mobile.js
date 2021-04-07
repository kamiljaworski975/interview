const body = document.querySelector('body');
const menuIcon = document.querySelector('.nav__mobile--menu');
const menuLink = Array.from(document.querySelectorAll('.nav__mobile--element'));

const hideLinkHandler = () => {
  menuLink.forEach((el) => {
    el.addEventListener('click', () => body.classList.remove('active'));
  });
};

menuIcon.addEventListener('click', () => {
  let isActive = body.classList.value === 'active';
  if (!isActive) {
    body.classList.add('active');
  } else {
    body.classList.remove('active');
  }
});

hideLinkHandler();
