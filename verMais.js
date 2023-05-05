let botao = document.querySelector('.button-ver-mais');


botao.addEventListener('click', function() {

    if (botao.classList.contains('false')) {
        botao.innerHTML = 'Ver mais';
        botao.classList.remove('false')
        botao.classList.add('true')
    }
    else {
        botao.innerHTML = 'Ver menos';
        botao.classList.remove('true')
        botao.classList.add('false')
    }

})

