const toggleMenu = () => {
  const icon = document.getElementById('nav-icon');
  const nav = document.querySelector('nav');
  const content = document.querySelector('main');

  icon.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('open');
    content.classList.toggle('shadow');
  });
};

export default toggleMenu;
