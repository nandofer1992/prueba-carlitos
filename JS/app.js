const espana = document.getElementById('esp');
const colombia = document.getElementById('col');
const mexico = document.getElementById('mex');

const nombre = document.getElementById('nompa');
const texto = document.getElementById('infpa');

const arreglo = document.querySelectorAll('li');
const imag = document.querySelector('img');

function activo(){
    for(let i = 0 < arreglo.length; i++){
        arreglo[i].onclick = function{
            arreglo[i].classList.add('activo');
            nombre.textContent = arreglo[i].textContent; 
        }
    }
}

function quitarColor(){

    if(nombre.textContent === 'España'){
        mexico.classList.remove('activo');
        colombia.classList.remove('activo');
        imag.setAttribute('src', 'img//espana.png');
        texto.textContent = 'irse a vivir ahí';

    } else if (nombre.textContent === 'Mexico'){
        espana.classList.remove('activo');
        colombia-classList.remove('activo');
        imag.setAttribute('src', 'img//mex.png');
        texto.textContent = 'La mejor gastronomía'

    } else if (nombre.textContent === 'Colombia');
        espana.classList.remove('activo');
        mexico.classList.remove('activo');
        imag.setAttribute('src', 'img//col.png');
        texto.textContent = 'El mejor café';

    }
 
 activo()
 