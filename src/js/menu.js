const toggleMenu = () => {
  const icon = document.getElementById('nav-icon');
  const nav = document.querySelector('nav');

  icon.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('open');
  });
};

export default toggleMenu;
