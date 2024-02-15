'use strict'
const btnLogin = document.getElementById('login');

async function loginValidation() {
   
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;

    let userStatus = false; 

    const getUsers = async () => {
        const url = 'http://localhost:8080/usuario';
        try {
            const response = await fetch(url);
            const usuarios = await response.json();
            return usuarios;
        } catch (error) {
            alert('Houve um problema com a solicitação de login.');
            return null;
        }
    };

    const usuarios = await getUsers();

    if (!usuarios) return;

    usuarios.forEach(function (user) {
        if(user.email === inputEmail && user.senha === inputPassword) {
            userStatus = true;
            window.location.href = './pages/home.html';
            return;
        } 
    });

    if (!userStatus) {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

btnLogin.addEventListener('click', loginValidation);