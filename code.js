var pantalla = '';
var pantallaE = '';
let enteros = [];
let operador = [];
let v1, v2;

const operadores = {
    'x':  (v1, v2) => {
        return v1 * v2
    },
    '/': (v1, v2) => {
        return v1 / v2
    },
    '+':  (v1, v2) => {
        return v1 + v2
    },
    '-':  (v1, v2) => {
        return v1 - v2
    },
    '**': (v1, v2) => {
        return v1 ** v2
    },
    '√':  (v1) => {
        return Math.sqrt(v1);
    },
    '∛':  (v1, v2) => {
        return Math.pow(v1, 1 / 3);
    },
}

function nuevoCaracter(caracter) {
    caracter = caracter.trim();

    if (caracter >= 0 || caracter == ',') {
        pantalla += caracter;
        pantallaE += caracter;
        
        actualizarPantalla(pantalla);

    } else if (caracter == '&lt;===') {
        pantalla = pantalla.slice(0,-1);
        pantallaE = pantalla.slice(0,-1);

        actualizarPantalla(pantalla);

    } else if (caracter == 'c') {
        pantallaE = '';
        pantalla = '';
        enteros = [];
        operador = [];

        actualizarPantalla(pantalla);

    } else if (caracter == '=') {
        enteros.push(pantallaE);
        pantallaE = '';
        operaciones(enteros, operador);
        enteros = [];
        operador = [];
        actualizarPantalla(pantalla);

    } else{
        if (pantallaE){
            enteros.push(pantallaE);
            pantallaE = '';
        }
        operador.push(caracter);
        pantalla += caracter;

        actualizarPantalla(pantalla);
    }
}

 function operaciones(enteros, operador) {
     v1 = parseInt(enteros[0]);
     
     for (let i = 0; i <= enteros.length; i++) {
             v2 = parseInt(enteros[i+1]);
         v1 = operadores[operador[i]](v1, v2);   
         if (enteros[i+2]) {
             v2 = parseInt(enteros[i+2]);
         } else {
             pantalla = v1;
             pantallaE = v1;
             return;
         }
     }  
 }

function actualizarPantalla(pantalla) {
    document.getElementById('pantalla').innerHTML=pantalla;
    console.log(pantalla);
}

