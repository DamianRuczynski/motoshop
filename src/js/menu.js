const toggleMenu = () => {
  const icon = document.getElementById('nav-icon');
  const nav = document.querySelector('nav');
  const menuShadow = document.querySelector('.menu-shadow');
  const body = document.querySelector('body');

  icon.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('open');
    menuShadow.classList.toggle('active');
    body.classList.toggle('hidden');
  });

  menuShadow.addEventListener('click', function () {
    this.classList.remove('active');
    body.classList.remove('hidden');
    nav.classList.remove('active');
    icon.classList.remove('open');
  });
};

export default toggleMenu;
