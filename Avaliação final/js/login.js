document.getElementById('login').addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value

    const dados = JSON.parse(localStorage.getItem("usuário")) || []
    const validaçao = dados.find((usuario) => usuario.name === name && usuario.password === password)
    
    if(validaçao) {

        localStorage.setItem('usuarioLogado', JSON.stringify(validaçao))

        window.location.href = 'recados.html'

    }else{
        alert('Usuário ou senha incorreta')
    }

})
