document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);
        
        window.location.href = 'thavala.html'; 
    });
});