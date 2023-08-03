
/*let numero1 = Number(prompt("ingresa un número"));
let numero2= Number(prompt("Ingresa otro número"));
let numero3= Number(prompt("Ingresa otro número"));

/*1.Realizar un programa que reciba 2 números y que imprima por consola si el primer
número es mayor que el segundo. */

/*function programa (numero1, numero2){
    if(numero1 >numero2){
        console.log("El primer número es mayor que el segundo");
    } else{
        console.log("el primer número es igual o menor que el segundo");
    }
};
programa(numero1, numero2);

/*2. Realizar un programa que reciba 2 números y que imprima por consola si los números
2 son iguales o si son diferentes. */

/*function programa2 (numero1, numero2){
    if(numero1 === numero2) {
        console.log(`Los números ${numero1} y ${numero2} son iguales`);
    } else{
        console.log(`Los números ${numero1} y ${numero2} son diferentes`);
    }
}

programa2(numero1, numero2);
/*3. Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2
números es el más grande o si son iguales. */

/*function programa3 (numero1, numero2){
    if (numero1>numero2){
        console.log(`El número ${numero1} es mayor que el número ${numero2} `)
    } else if(numero1 === numero2){
        console.log(`Los números ${numero1} y ${numero2} son iguales`)
    } else{
        console.log(`El número ${numero2} es mayor al número ${numero1}`)
    }
}

programa3(numero1, numero2);

/*4. Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es el más chico. */

/*function programa4 (numero1, numero2, numero3) {
    if(numero1<numero2&&numero3){
        console.log(`El número ${numero1} es el más chico`);
    } else if(numero2<numero1&&numero3){
        console.log(`El número ${numero2} es el más chico`);
    }else if (numero3<numero2&&numero1){
        console.log(`El número ${numero3} es el más chico`);
    }
}
programa4(numero1, numero2, numero3);

/*5. Realizar un programa que reciba 2 objetos representando personas con las propiedades:
● nombre
● edad
● altura
y que imprima por pantalla:
1. cual de las dos personas es la más alta
2. cual es la de mayor edad. */

/*const persona ={
    nombre: "Sofi",
    edad: 28,
    altura: 1.62
};

const persona2={
    nombre: "Hector",
    edad: 27,
    altura: 1.75
};

function programa5 (objeto, objeto2){
    if(objeto.altura > objeto2.altura){
        console.log(`${objeto.nombre} es más alto que ${objeto2.nombre}`)
    } else{
        console.log(`${objeto2.nombre} es más alto que ${objeto.nombre}`)
    } 
    if (objeto.edad > objeto2.edad){
        console.log(`${objeto.nombre} tiene mayor edad`)
    } else{
        console.log(`${objeto2.nombre} es mayor.`)
    }
}

programa5(persona, persona2);

/*6. Realizar un programa que permita ingresar por pantalla:
● tu nombre
● tu edad
● tu altura
● tu visión
y determine si estás capacitado para conducir, para saber esto la persona deberá
● Tener edad mínima de 18 años.
● Medir más de 150 cm.
● Tener una visión como mínimo de 8 de 10. */

/*let nombre = prompt("Tu nombre");
let edad = Number(prompt("Tu edad"));
let altura = Number(prompt("Tu altura"));
let vision = Number(prompt("Tu visión"));

function programa6(edad, altura, vision, nombre){
    if(edad >= 18 && altura >=150 && vision === 8 || vision === 9 || vision === 10){
        console.log(`${nombre} está capacitado para conducir`)
    } else { 
        console.log(`${nombre} no está capacitado para conducir`)
    }
}

programa6(edad, altura, vision, nombre);

/*7.Realizar un programa que permita el ingreso por pantalla de los siguientes datos:
● Nombre del cliente.
● Pase ( vip o normal )
● Si posee entrada ( si o no ).
Las personas que posean:
Tú mismo nombre tienen ingreso libre ( mostrar un mensaje de bienvenida ) ó
Pase vip tienen ingreso libre ( mostrar un mensaje de bienvenida )
Si posee entrada preguntar ¿desea utilizarla?, en caso:
afirmativo ( mostrar un mensaje de bienvenida )
Y por último en caso de:
No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar?
en caso:
negativo ( mostrar mensaje de despedida )
afirmativo preguntar dinero disponible, si posee:
$1000 o mas, ( mostrar un mensaje venta exitosa y de bienvenida )
Menos de $1000 ( mostrar un mensaje de rechazo de venta ) */

/*let nombreCliente = prompt("Nombre del cliente");
let paseCliente = prompt("Tipo de pase (Vip o Normal)");
let poseeEntrada = prompt("Posee entrada (sí o no)");

if (nombreCliente === "Sofia" || paseCliente === "Vip"){
    console.log(`Bienvenida/o, ${nombreCliente}`)
} else {
    if (poseeEntrada ==="si" || poseeEntrada ==="Si"){
        let deseaUtilizarla = prompt("¿Deseas utilizar la entrada?");
        if (deseaUtilizarla === "si" || deseaUtilizarla === "Si") {
            console.log(`Bienvenido/a, ${nombreCliente}`)
        } else {
            console.log("Vuelve pronto")
        }
    } else {
        let comprarEntrada =prompt("¿Deseas comprar la entrada?");
        if (comprarEntrada === "Si" || comprarEntrada === "si"){
            let dineroDisponible = Number(prompt("¿Cuánto dinero tienes?"));
            if (dineroDisponible >= 1000){
                console.log("Venta exitosa");
            } else {
                console.log("Rechazo de venta")
            }
        } else {
            console.log("Hasta pronto")
        }
    }
};

/*8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar,
un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas
mucho código repetido, más adelante verás cómo realizar este juego de manera más
eficiente.*/
/*let numeroIncognita = 6;
let numeroIngresado = Number(prompt("Ingresa un número del 1 al 10"));
if (numeroIncognita === numeroIngresado) {
    alert("Ganaste, has adivinado el número");
} else if ( numeroIngresado > numeroIncognita){
    numeroIngresado= Number(prompt("El número ingresado es mayor, ingresa otro número"))
    if(numeroIngresado === numeroIncognita){
        alert("Ganaste, has adivinado el número")
    } else if (numeroIngresado > numeroIncognita){
        numeroIngresado = Number(prompt("El número ingresado es mayor, ingresa otro número"))
        if (numeroIngresado === numeroIncognita) {
            alert("Ganaste, has adivinado el número")
        } else if (numeroIngresado>numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        } else if (numeroIngresado<numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        }
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El número ingresado es menor, ingresa otro número"))
        if (numeroIngresado === numeroIncognita) {
            alert("Ganaste, has adivinado el número")
        } else if (numeroIngresado>numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        } else if (numeroIngresado<numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        }
    }
} else if (numeroIngresado < numeroIncognita) {
    numeroIngresado = Number(prompt("El número ingresado es menor, ingresa otro número"))
    if (numeroIngresado === numeroIncognita){
        alert("Ganaste, has adivinado el número")
    } else if (numeroIngresado > numeroIncognita) {
        numeroIngresado = Number(prompt("El número ingresado es mayor, ingresa otro número"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, has adivinado el número")
        } else if (numeroIngresado>numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        } else if (numeroIngresado<numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        }
    } else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El número ingresado es menor, ingresa otro número"))
        if (numeroIngresado === numeroIncognita) {
            alert("Ganaste, has adivinado el número")
        } else if (numeroIngresado>numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        } else if (numeroIngresado<numeroIncognita){
            alert("Tercer intento. Has perdido el juego")
        }
    }
}

 /*9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45
años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando
si en realidad tiene esa edad.*/

/*let ingresaEdad = Number(prompt("Ingresa tu edad"));
if (ingresaEdad >=0 && ingresaEdad <= 12){
    console.log("Eres un infante");
} else if (ingresaEdad >=13 && ingresaEdad <=18){
    console.log("Eres un adolescente");
} else if (ingresaEdad >=19 && ingresaEdad <=45){
    console.log("Eres un mayor joven")
} else if ( ingresaEdad > 45 && ingresaEdad <= 100){
    console.log("Eres un anciano")
} else {
    console.log("¿Realmente tienes esa edad?")
}

/*10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso
de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.*/

/*let eleccion = prompt("Jugador 1: Ingresa piedra, papel o tijeras");
let eleccion2 = prompt("Jugador 2: Ingresa piedra, papel o tijeras");
if (eleccion === eleccion2){
    console.log("Empataron");
} else if ( eleccion == "piedra" && eleccion2 == "papel"){
    console.log("Gana el jugador 2");
} else if ( eleccion == "papel" && eleccion2 == "piedra"){
    console.log("Gana el jugador 1");
} else if (eleccion == "tijeras" && eleccion2 == "piedra"){
    console.log("Ganó el jugador 2")
} else if (eleccion == "piedra" && eleccion2 == "tijeras") {
    console.log("Ganó el jugador 1 ")
} else if (eleccion == "tijeras" && eleccion2 == "piedra"){
    console.log ("ganó el jugador 2")
}else {
    console.log("gana el jugador 1")
}

/*11.Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones:
● Blanco o Negro: Falta de color.
● Verde: El color de la naturaleza.
● Azul: El color del agua.
● Amarillo: El color del sol.
● Rojo: El color del fuego.
● Marrón: el color de la tierra.
● y para cualquier otro valor: Excelente elección, no lo teníamos pensado. */
/*let color = prompt("Ingresa un color con la primera letra con mayúscula")
switch (color) {
    case "Blanco" || "Negro":
        console.log("Falta de color");
        break;
    case "Verde":
        console.log("El color de la naturaleza");
        break;
    case "Azul":
        console.log("El color del agua");
        break;
    case "Amarillo":
        console.log("El color del sol");
        break;
    case "Rojo":
        console.log("El color del fuego");
    case "Marrón":
        console.log("El color de la tierra");
    default: 
        console.log("Excelente elección, no lo teníamos pensado");
        break;
}

/*12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.*/
/*let valorNumerico = Number(prompt("Ingresa un número"));
let valorNumerico2 = Number(prompt("Ingresa otro número"));
let operacion = prompt("Ingresa una operación (suma, resta, multiplicación, división");

if (operacion === "suma") {
    console.log(`El resultado de ${valorNumerico} + ${valorNumerico2} = ${valorNumerico + valorNumerico2}`);
} else if ( operacion === "resta") {
    console.log(`El resultado de ${valorNumerico} - ${valorNumerico2} = ${valorNumerico - valorNumerico2}`);
} else if (operacion === "multiplicación" || operacion === "multiplicacion"){
    console.log(`El resultado de ${valorNumerico} x ${valorNumerico2} es ${valorNumerico*valorNumerico2}`);
} else if (operacion === "division" || operacion === "división"){
    if(valorNumerico2 != 0){
        console.log(`El resultado de ${valorNumerico} / ${valorNumerico2} es ${valorNumerico/valorNumerico2}`);
    } else {
        alert("ERROR")
    }
}

/*13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() más un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */
let primerNombre = prompt("Ingresa tu primer nombre");
let segundoNombre = prompt("Ingresa tu segundo nombre");
let apellido = prompt("Ingresa tu apellido");
let nacionalidad = prompt("Ingresa tu nacionalidad");
let genero = prompt("Ingresa tu género");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento");
let fechaEmision = prompt("Ingresa la fecha de emisión de tu Carnet de identidad");
let fechaVencimiento = prompt("Ingresa la fecha de vencimiento");

let datosCorrectos = prompt(`${primerNombre}
                            ${segundoNombre}
                            ${apellido}
                            ${nacionalidad}
                            ${genero}
                            ${fechaNacimiento}
                            ${fechaEmision}
                            ${fechaVencimiento}
                            ¿Están correctos los datos?`)
if(datosCorrectos === "Sí"){
 let datosIngresados= {
        nombre: primerNombre,
        segundoNombre : segundoNombre,
        apellido: apellido,
        nacionalidad: nacionalidad,
        fechaNacimiento: fechaNacimiento,
        fechaEmision: fechaEmision,
        fechaVencimiento: fechaVencimiento
    }
    console.table(datosIngresados);
    alert("Registro exitoso")
} else if (datosCorrectos === "No"){
    alert("Vuelva a intentarlo en 1 mes");
}

