document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll para enlaces del menú
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Validación del formulario y despliegue del modal de confirmación
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.classList.remove('was-validated');
    
    let valid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(nameInput.value.trim() === '') {
      valid = false;
      nameInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }
    if(!emailRegex.test(emailInput.value.trim())) {
      valid = false;
      emailInput.classList.add('is-invalid');
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
    }
    if(messageInput.value.trim() === '') {
      valid = false;
      messageInput.classList.add('is-invalid');
    } else {
      messageInput.classList.remove('is-invalid');
      messageInput.classList.add('is-valid');
    }

    if(valid) {
      // Mostrar modal de confirmación simulando envío de correo
      const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmationModal.show();
      // Reiniciar formulario y clases de validación
      form.reset();
      nameInput.classList.remove('is-valid');
      emailInput.classList.remove('is-valid');
      messageInput.classList.remove('is-valid');
    } else {
      form.classList.add('was-validated');
    }
  });
});
