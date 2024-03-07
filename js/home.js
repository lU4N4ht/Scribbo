'use strict'

const userId = localStorage.getItem('userId')

window.onload = async function showName(){

    const urlUser = await fetch(`http://localhost:5080/usuario/${userId}`)
    const user = await urlUser.json()

    const homeName = document.getElementById('home-name')
    homeName.textContent = user.nome
}

document.addEventListener('DOMContentLoaded', function () {
    const monthsBr = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ];


    function GetDayCalender(mes) {


        if (mes > 11) {
            ano++;
            mes = 0;
        } else if (mes < 0) {
            ano--;
            mes = 11;
        }


        document.getElementById('mes-task').innerHTML = monthsBr[mes];
    }


    let now = new Date();
    let mes = now.getMonth();
    let ano = now.getFullYear();
    GetDayCalender(mes, ano);
});

document.addEventListener('DOMContentLoaded', function() {
    const idUser = localStorage.getItem('userId')
    const url = `http://127.0.0.1:5080/tarefas?idUsuario=${userId}`
 
    if (!idUser) {
        console.error('Usuário não encontrado');
        return;
    }

    fetch(url)
    .then(response => response.json())
    .then(tarefas => {
        const container = document.getElementById('card-container');

        tarefas.forEach(tarefa => {
            const card = document.createElement('div');
            card.classList.add('card');

            const taskDescription = document.createElement('h1');
            taskDescription.classList.add('task-name');
            //nao sei pq diabos nao ta pegando cor e weight no css normal
            taskDescription.style.color = 'var(--bg-color)';
            taskDescription.style.fontWeight = '600'
            taskDescription.textContent = tarefa['descrição'];

            card.appendChild(taskDescription);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao buscar dados da API:', error));
});