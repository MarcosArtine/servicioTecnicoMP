document.addEventListener('DOMContentLoaded', () => {
  // Lógica del menú hamburguesa para teléfonos móviles
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Desplazamiento suave para los enlaces del menú
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
