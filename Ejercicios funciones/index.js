/*1. Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que
represente un nombre, y muestre en la consola un saludo personalizado utilizando el
nombre proporcionado. Llama a la función con tu propio nombre para verificar que
funcione correctamente. */

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
};
saludar("Sofi");

/*2.Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores
diferentes y muestra el resultado en la consola. */

function multiplicar (numero, numero2){
    let multiplicacion = numero*numero2;
    return multiplicacion;
}

function multiplicar2 (numero, numero2){
    return numero*numero2;
}

console.log(multiplicar(4,5));
console.log(multiplicar(10, 6));

/* 3. Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que
representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego,
crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos
que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza
estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura
3 y lados de 4, 5 y 6 respectivamente. */

function areaTriangulo (base, altura) {
    let area= (base*altura)/2;
    return area; 
}

function perimetroTriangulo (lado1, lado2, lado3) {
    let perimetro = lado1 + lado2 + lado3;
    return perimetro;
}

console.log(areaTriangulo(5,5));
console.log(perimetroTriangulo(5,8,45));

/*4. Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que
representen el precio y la cantidad de un producto, y devuelva el precio total de la
compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del
10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un
descuento del 20% al precio total. Llama a la función con diferentes valores de precio y
cantidad para verificar que funcione correctamente */

function calcularPrecio (precio, cantidad){
    if (cantidad >=10 && cantidad <20){
        precio = precio - (precio*(10/100))
    } else if(cantidad >=20){
        precio = precio - (precio*(20/100))
    }
    return precio
}

console.log(calcularPrecio(600, 15));
console.log(calcularPrecio(600, 20));

/*5. Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que
represente la edad de una persona, y devuelva un mensaje que indique si la persona
es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres
mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
Utiliza el operador ternario para implementar esta función. Llama a la función con
diferentes valores de edad para verificar que funcione correctamente. */

function esMayorDeEdad (edad){
    if(edad >= 18) {
        console.log("Eres mayor de edad")
    } else{
        console.log("No eres mayor de edad")
    }
}

esMayorDeEdad(18);