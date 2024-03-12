
'use strict'


const userId = localStorage.getItem('userId')


window.onload = async function loadProfile(){


    const urlUser = await fetch(`http://localhost:5080/usuario/${userId}`)
    const user = await urlUser.json()


    const profileName = document.getElementById('profile-name')
    profileName.textContent = user.nome


    const profileUsername = document.getElementById('username')
    profileUsername.value = user.nome


    const profileEmail = document.getElementById('email')
    profileEmail.value = user.email


    const profilePassword = document.getElementById('password')
    profilePassword.value = user.senha


}

const applyButton = document.getElementById('apply-button')

async function updateData(){

    const inputName = document.getElementById('username').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value

    if(inputName === '' || inputEmail === '' || inputPassword === ''){
        alert('ERRO: Não é possivel remover dados obrigatórios')
    } else {

        try {
            
            const _data = {
                nome: inputName,
                email: inputEmail,
                senha: inputPassword
            }

            const _url = `http://localhost:5080/usuario/${userId}`

            const _options = {
                method: 'put',
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
                mode: 'cors',
                redirect: 'follow',
                cache: 'default'
            }

            fetch(_url, _options)
            window.relo
            alert('Dados atualizados com sucesso !');

        } catch (error) {
            
            alert('Erro ao atualizar os dados')
        }
    }
}

const deleteButton = document.getElementById('delete-button')

async function deleteAccount(){
    alert('ATÉ MAIS')
    window.location.href = '../index.html'
}

applyButton.addEventListener('click', updateData)
deleteButton.addEventListener('click', deleteAccount)
