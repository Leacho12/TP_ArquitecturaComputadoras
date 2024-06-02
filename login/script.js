document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (!email || !password) {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return;
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);

    // Simulación de inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Modo oscuro / claro
const toggleButton = document.getElementById('colorModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '🌞 Color mode' : '🌙 Color mode';
});
