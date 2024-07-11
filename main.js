let email = document.getElementById("email").innerHTML;
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
  } catch (err) {
    console.error("Error ocourred to copy: ", err);
  }
};

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Agregar un event listener a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Eliminar la clase 'active' de todos los enlaces
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Agregar la clase 'active' al enlace clicado
    this.classList.add('active');
  });
});


