/* ------------------- Declaraciones ----------------------------*/






/* ------------------- Funciones ----------------------------*/

const myObject = {
    x: 5,
    y: 'hello', 'apellidos-nombres': 'Johan Cuaspa',
    variousNoises: ['meow', 'Woof', 'grrrr', 'arg'],
    printmeow: function () {
        console.log('Meow-meow');
    }

}
const n = myObject.x;
const p = myObject['y'];
const scadena = myObject['apellidos-nombres'];

const cats = {
    fineFeline: 'bengal',
};
const x = 'fine'
const y = 'feline';
const z = x + y;
const result = cats[z];


/* --------------------- Identificadores -------------------*/
var miNumero = 2;
var miTexto = 'Mi nombre es Johan';
var cadena = 'Otra manera de cadena';
var miTexto = 3.14;
const i_pi = 3.14;
var dato, temp, contador = 0;
var cond = true;
var fecha = Date();
var suma = ++dato;
/*var objeto propiedad_1 valor_1, propiedad_# puede ser un identificador...2:valor_2, o un numero...// "propiedadn": valor_n o una cadena*/



/* ------------------- Main ----------------------------*/
console.log("Hola mundo");
myObject.printmeow();
cats['clase'] = 'gato';
console.log(cats.clase);
document.write(myObject);