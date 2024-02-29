'use strict'

const categorias = [
    {
        nome: 'pizza',
        imagem: 'pizza.png'
    },
    {
        nome: 'bebida',
        imagem: 'bebida.png'
    },
    {
        nome: 'calzone',
        imagem: 'calzone.png'
    },
    {
        nome: 'esfiha',
        imagem: 'esfiha.png'
    },
    {
        nome: 'sorvete',
        imagem: 'sorvete.png'
    },
    {
        nome: 'sobremesa',
        imagem: 'sobremesa.png'
    }
]



async function mostrarCards(pessoa) {

    // const getTasks = async () => {
    //     const url = 'http://localhost:5080/tarefas';
    //     try {
    //         const response = await fetch(url);
    //         const tarefas = await response.json();
    //         return tarefas;
    //     } catch (error) {
    //         alert('Houve um problema com a solicitação das tarefas.');
    //         return null;
    //     }
    // };
    // const tarefas = await getTasks();
    // tarefas.forEach(function (tarefa) {

        const cardContainer = document.getElementById('card-container')
        const card = document.createElement('div')
        card.classList.add('card')
        const task = document.createElement('h2')
        task.classList.add('task-name')
        task.textContent = pessoa.nome

        card.appendChild(task);
        cardContainer.appendChild(card);

    // });

}

document.addEventListener('DOMContentLoaded', mostrarCards);

