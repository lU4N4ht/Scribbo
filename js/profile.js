
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
