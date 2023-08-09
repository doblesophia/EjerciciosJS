/*1° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno
del cuadrado deberá cambiar a celeste.

Extras:
● Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo.
● Lograr que cada vez que haya un cambio de color aparezca el nombre del color
dentro del cuadrado. */

let cuadradoGris = document.getElementById('cuadrado');
let boton =document.getElementById('btn')
  



function fnEvento (){
        cuadradoGris.style.backgroundColor='lightblue'
        return fnEvento
    }
    
boton.addEventListener('click', fnEvento )

/*2.Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
deberá aparecer impreso dentro del cuadrado.
Extras:

● Crea un botón para borrar el contenido del cuadrado. */

let cuadradoGris1 = document.getElementById('cuadrado1')
let textarea = document.getElementById('textarea')

function fnEscribir (){
    cuadradoGris1.textContent = textarea.value
    return fnEscribir
}

textarea.addEventListener('keyup', fnEscribir)

/*3. Crear una aplicación que calcule el índice de masa corporal, al presionar el
botón “calcular” deberá mostrar el resultado en el input correspondiente. */
let estaturaInput = document.getElementById('estatura');
let kilogramosInput = document.getElementById('kilo');
let boton2= document.getElementById('btn2');
let resultadoInput = document.getElementById('resultado');


boton2.addEventListener('click', fnCalcularIMC)

function fnCalcularIMC (){
    let resultado = (kilogramosInput.value)/(estaturaInput.value*estaturaInput.value) 
    resultadoInput.value = resultado
    return fnCalcularIMC
}

/*4° - Crear una aplicación de conversión de divisa. Deberá tener los valores por
defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), y al hacer algún cambio
en alguno de los inputs se deberá ver reflejado su correspondiente valor en la
moneda a convertir. */

let pesoChileno = document.getElementById('pesoChileno');
let dolar = document.getElementById('dolar')
let dolares = 1
let pesosChilenos = 800



pesoChileno.addEventListener('keyup', calculoDivisaPesoDolar)

dolar.addEventListener('keyup', calculoDivisasDeDolaraPeso)

function calculoDivisasDeDolaraPeso (){
    
    pesoChileno.value=dolar.value*pesosChilenos
}

function calculoDivisaPesoDolar(){

    dolar.value=pesoChileno.value/pesosChilenos
}