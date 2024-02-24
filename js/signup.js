'use strict'

const btnSignup = document.getElementById('signup');

async function userSignup() {
    const inputName = document.getElementById('name').value;
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    const inputConfirm = document.getElementById('confirm-password').value;

    if (inputName === '' || inputEmail === '' || inputPassword === '' || inputConfirm === '') {
        alert('ERRO: Demonstrar todos os valores')

    } if (inputPassword != inputConfirm) {
        alert("Preenche direito")

    } else {

        try {
            const _data = {
                id: "",
                nome: inputName,
                email: inputEmail,
                senha: inputPassword
            };

            const _url = 'http://localhost:5080/usuario';

            const _options = {
                method: 'post',
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
                mode: 'cors',
                redirect: 'follow',
                cache: 'default'
            };

            fetch(_url, _options)
            window.location.href = '../index.html'
            alert('Dados cadastrados com sucesso !');


        } catch (error) {
            alert('Erro ao cadastrar dados: ' + error.message);
        }
    }
}

window.onload = () => {
    btnSignup.addEventListener('click', userSignup);
};

//para subir o back no ar .\js\script.js 