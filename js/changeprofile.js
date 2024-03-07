'use strict';

const updatePhotoInput = document.querySelector('#update-photo');
const imagePreview = document.querySelector('#profile-photo');
const imageNav = document.querySelector('#profile-button');
const removeButton = document.querySelector('#remove-button');

const carregarImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            imagePreview.src = fileReader.result;
            imageNav.src = fileReader.result;
        };
        fileReader.readAsDataURL(file);
    }
};


const removerImagem = () => {
    imagePreview.src = ''; 
};


updatePhotoInput.addEventListener('change', carregarImagem);
removeButton.addEventListener('click', removerImagem);