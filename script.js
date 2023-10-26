const btnCont= document.querySelector("#btnContador");
const contenedor =document.querySelector("#contadorContenedor"); 
const contContador =document.querySelector("#contadores"); 
const cursorE= document.querySelector("#cursor");
const clickE= document.querySelector("#click");
const middleClick = document.querySelector("#ruedaClick");
const wheel = document.querySelector("#rueda");
const cuerpoTexto = document.querySelector('#miBody');
const divBotones = document.querySelector("#contBotones");

function eventDefault(evt){
    evt.preventDefault();
}
function incrementarContador(){
    let mensaje = clickE.innerText.split(":");
    let numero = mensaje[1].split(" ");
    let contador = parseInt(numero[1])+1;
    clickE.innerText = mensaje[0]+": "+contador;
}
function verificarContar(){
    let mensaje = cursorE.innerText.split(":");
    let numero = mensaje[1].split(" ");
    let contador = parseInt(numero[1])+1;
    cursorE.innerText = mensaje[0]+": "+contador;
}

function eventClick(evt){
    if(evt.button == 1){
        let mensaje = middleClick.innerText.split(":");
        let numero = mensaje[1].split(" ");
        let contador = parseInt(numero[1])+1;
        middleClick.innerText = mensaje[0]+": "+contador;
        evt.preventDefault();
    }
}

btnCont.addEventListener('click',incrementarContador);
btnCont.addEventListener('mouseenter',verificarContar);
btnCont.addEventListener('wheel',function(){
    let mensaje = wheel.innerText.split(":");
    let numero = mensaje[1].split(" ");
    let contador = parseInt(numero[1])+1;
    wheel.innerText = mensaje[0]+": "+contador;
    
});


clickE.addEventListener('copy',eventDefault);
clickE.addEventListener('ondrag',function(){
    alert('Sin arrastrar,rastrero');
});

btnCont.addEventListener('mousedown',eventClick);//evento de click de rueda

cuerpoTexto.addEventListener('wheel',eventDefault,{passive:false});

contenedor.addEventListener('contextmenu',eventDefault);