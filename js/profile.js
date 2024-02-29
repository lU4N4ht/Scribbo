'use strict'

function showProfile(){

  const id = localStorage.getItem('id')
  const user = {}
  user = `http://localhost:5080/usuario/${id}`

  const profileName = document.getElementById('profile-name')
  const userName = document.getElementById('username')
  const profileEmail = document.getElementById('email')
  const profilePassword = document.getElementById('password')



  profileName.textContent = usuario.nome
  userName.value = usuario.nome
  profileEmail.value = usuario.email
  profilePassword.value = usuario.senha
  
}



