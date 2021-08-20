const toggleMenu = () => {
  const icon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');

  icon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  console.log('test');
};

export default toggleMenu;
