const botaoPlayPause = document.getElementById('play');
const audioCapitulo = document.getElementById('audio-capitulo');
const avancar = document.getElementById('avancar');
const voltar1 = document.getElementById('retroceder');
const capituloTexto = document.getElementById('capitulo');


const capituloAntecessor = 1;
const capitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausar() {
    if ( taTocando === 0 ) {
        tocarFaixa();
        taTocando = 1
        
    } else {
        pausarFaixa();
        taTocando = 0
    }
}

function atualizarTexto() {
    capituloTexto.innerText = 'Capitulo ' + capituloAtual;
}

function proximaFaixa() {
    if (capituloAtual === capitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1 
    }
    audioCapitulo.src = './src/book/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    atualizarTexto()

    
}

function voltar() {
    if (capituloAtual === capituloAntecessor) {
        capituloAtual = 10;
    } else {
    capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = './src/book/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    atualizarTexto() 
    
}


voltar1.addEventListener('click', voltar);
botaoPlayPause.addEventListener('click', tocarOuPausar);
avancar.addEventListener('click', proximaFaixa);


