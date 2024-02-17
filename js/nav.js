'use strict'

const profile = require('./profile')

const homeButton = document.getElementById('home-button')
const taskButton = document.getElementById('task-button')
const profileButton = document.getElementById('profile-button')
const logoutButton = document.getElementById('logout-button')

profileButton.addEventListener('click', profile.showProfilePage)