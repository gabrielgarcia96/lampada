const ligar = document.getElementById('ligado');
const desligar = document.getElementById('desligado');
const lampada = document.getElementById('lampada');

function isquebrada () {
    return lampada.src.indexOf('quebrada') > -1
}

function lampadaOn () {
    if(!isquebrada()){
    lampada.src = './img/ligada.jpg';
    }
}
function lampadaOff (){
    if(!isquebrada()){
    lampada.src = './img/desligada.jpg';
    }
}
function lampadaQuebra () {
    lampada.src = './img/quebrada.jpg';
}

ligar.addEventListener('click', lampadaOn);
desligar.addEventListener('click', lampadaOff);
lampada.addEventListener('mouseover', lampadaOn);
lampada.addEventListener('mouseleave', lampadaOff);
lampada.addEventListener('dblclick', lampadaQuebra);
