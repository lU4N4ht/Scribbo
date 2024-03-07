'use strict'

const userId = localStorage.getItem('userId')

window.onload = async function showName(){

    const urlUser = await fetch(`http://localhost:5080/usuario/${userId}`)
    const user = await urlUser.json()

    const homeName = document.getElementById('home-name')
    homeName.textContent = user.nome
}