const ballebot = document.querySelector('.conteudo-principal-img');
const btn      = document.querySelector('.conteudo-principal-escrito-botao');
const menuBtn  = document.querySelector('.cabecalho-btn');


/* animação do botão e da ballebot */
ballebot.addEventListener('load', () => {
    ballebot.classList.add('animar');
    btn.classList.add('animar');
});

/* animação hover da ballebot */
ballebot.addEventListener('mouseover', () => {
    ballebot.classList.toggle('animar-up-down');
});


/* animação scroll no logo Ballerini */
function ativarScroll() {
    
    document.querySelectorAll('.rodape-img').forEach(imagem => {
        if (imagem.getBoundingClientRect().top < window.innerHeight) {
            imagem.classList.add('ativar')
        }

        /* 
            getBoundingClientRect().top --> função que retorna o quanto está do top

            window.innerHeight --> altura da janela
        */
    });
}

window.addEventListener('scroll', ativarScroll);


/* abrindo menu */
menuBtn.addEventListener('click', () => {
    const abrirlinks = document.querySelector('.cabecalho-menu');
    
    menuBtn.classList.toggle('open');
    abrirlinks.classList.toggle('open-list');
});




