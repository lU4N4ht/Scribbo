const idUserLogado = localStorage.getItem('premium')

window.onload = async function surgirTask() {

    const objUser = await fetch(`http://localhost:5080/usuarios/${idUserLogado}`)
    const user = await objUser.json()

    const url = 'http://localhost:5080/tarefas'

    const tasks = await fetch(url)
    const listTask = await tasks.json()

    const container = document.getElementById('card')

    listTask.forEach(tasks=> {
        
        if (user.id === tasks.idUserLogado) {

            const card = document.createElement('div')
            const titulo = document.createElement('h2')
            const data = document.createElement('p')
            const commentImg = document.createElement('img')
            const updateImg = document.createElement('img')
            const discardImg = document.createElement('img')
        
            commentImg.src = '../img/bate-papo.png'
            commentImg.alt = 'comment task'

            updateImg.src = '../img/adicionar.png'
            updateImg.alt = 'update task'

            discardImg.src = '../img/lixeira.png'
            discardImg.alt = 'delete task'

            comment.id = `${task.id}`
            comment.onclick = LoadComment

            comment.appendChild(commentImg)
            update.appendChild(updateImg)
            discard.appendChild(discardImg)

            card.className = 'myCard'
            buttons.className = 'buttons'
            comment.className = 'buttonTask'
            update.className = 'buttonTask'
            discard.className = 'buttonTask'

            buttons.id = 'buttons'

            titulo.textContent = `${task.descricao}`
            data.textContent = `${task.dataConclusao}`

            buttons.appendChild(comment)
            buttons.appendChild(update)
            buttons.appendChild(discard)

            card.appendChild(titulo)
            card.appendChild(data)
            card.appendChild(buttons)

            container.appendChild(card)

        } else {
            const card = document.createElement('div')
            const titulo = document.createElement('h2')
            const data = document.createElement('p')
            const buttons = document.createElement('div')
            const comment = document.createElement('button')
            const commentImg = document.createElement('img')

            commentImg.src = '../imgs/comment.png'
            commentImg.alt = 'comment task'

            const id = task.id
            comment.id = id
            comment.onclick = LoadComment

            comment.appendChild(commentImg)

            card.className = 'card'
            buttons.className = 'buttons'
            comment.className = 'buttonTask'

            titulo.textContent = `${task.descricao}`
            data.textContent = `${task.dataConclusao}`

            buttons.appendChild(comment)

            card.appendChild(titulo)
            card.appendChild(data)
            card.appendChild(buttons)

            container.appendChild(card)
        }


    });

}

async function validarPremium() {
    const objUser = await fetch(`http://localhost:5080/usuario/${idUserLogado}`)
    const user = await objUser.json()

    if(user.premium === 1){
        window.location.href = '../pages/home.html'
    } else {
        Toastify({
            text: "Torne-se Usuário Premium !!",
            duration: 3000,
            style: {
                background: "linear-gradient(#344B58, #1A1E29)",
                width: '200px',
                height: '30px',
                textAlign: 'center',
                alignItems: 'center',
            }
        }).showToast();
    }
}

async function LoadComment(){
    const idTask = this.id
    localStorage.setItem('idTask', idTask)
}

function toggLePopup() {
    var popup = document.getElementById('myPopup')
    popup.style.display = (popup.style.display === 'none') ? 'block' : 'none'
}