'use strict'
const btnLogin = document.getElementById('login');
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

async function loginValidation() {

    const getUsers = async () => {
        const url = 'http://localhost:8080/usuario';
        const response = await fetch(url);
        const usuarios = await response.json();
        return usuarios;
    };

    const usuarios = await getUsers();

    try {
        
        usuarios.forEach(function (user) {

            if (user.email == inputEmail.value && user.senha == inputPassword.value) {
                window.location.href = './signup.html'
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        });
    } catch (error) {
        alert('Houve um problema com a solicitação de login');
    }
}

btnLogin.addEventListener('click', loginValidation)