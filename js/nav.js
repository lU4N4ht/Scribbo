'use strict'

const homeButton = document.getElementById('home-button')
const taskButton = document.getElementById('task-button')
const profileButton = document.getElementById('profile-button')
const logoutButton = document.getElementById('logout-button')


profileButton.addEventListener('click', () => {

    window.location.href = '../pages/profile.html'
})

homeButton.addEventListener('click', () => {
    window.location.href = '../pages/home.html'
})
taskButton.addEventListener('click', () => {
    window.location.href = '../pages/tasks.html'
})

logoutButton.addEventListener('click', () => {
    window.location.href = '/index.html'
})