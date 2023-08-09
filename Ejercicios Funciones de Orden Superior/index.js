

/*1.Generar una función que reciba como parámetro un array de cervezas y devuelva un
nuevo array con las 10 cervezas más alcohólicas
}
*/


function diezMasAltas(beers){
    const valorMasAltoImpresion = beers.map((elementoActual)=>elementoActual)
    valorMasAltoImpresion.sort((a,b) => b.abv - a.abv)
    const losMasAltos= valorMasAltoImpresion.slice(0,10)
    return losMasAltos
}
console.log(diezMasAltas(beers))

/*2. Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo
array con las 10 cervezas menos amargas. */

function diezMenosAmargas(beers){
    const valorMenosAmargoImpresion = beers.map((elementoActual => elementoActual))
    valorMenosAmargoImpresion.sort((a,b) => a.ibu - b.ibu)
    const losMenosAmargos= valorMenosAmargoImpresion.slice(0,11)
    return losMenosAmargos
}
console.log(diezMenosAmargas(beers))

/*3. Generar una función que reciba como parámetro el array de cervezas y un valor de
alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la
propiedades nombre, alcohol (abv) y "amargor" (ibu) */

function cervezasPorNivelEtilico(array, valor){
    const cervezasFiltradas = array.filter (array=> array.abv<=valor)
    return cervezasFiltradas
}

const filtradasFinal = cervezasPorNivelEtilico(beers, 5);
console.log(filtradasFinal)

const cervMapeadas = filtradasFinal.map(objeto =>{
       return {name: objeto.name,
        abv: objeto.abv,
        ibu: objeto.ibu,
        }
        
    }
)

console.log(cervMapeadas);

/*4. Generar una función que reciba como parámetro un array de cervezas, un nombre de
propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
ordenadas por la propiedad ingresada como segundo argumento, de manera
ascendente si el tercero es true o descendente si es false. */

function arrayNombreValor (arrayCerv, propiedad, valor){
    let arrayOrdenado = arrayCerv.slice(0, 10);
    if (valor === true){
        arrayOrdenado.sort((a,b)=> a[propiedad] - b[propiedad])
    } else if (valor === false){
        arrayOrdenado.sort((a,b)=>b[propiedad] - a[propiedad])
    }
return arrayOrdenado
}

console.log(arrayNombreValor(beers, "abv", true))
//console.log(arrayNombreValor(beers, beers.name, true))

/*5. Generar una función que reciba como parámetro un array de cervezas y un id. La
función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una
tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del
array. Cada fila debe tener los datos que se piden de cada una de las cervezas. */

let cuerpoTabla = document.getElementById('body');

let nameCervezas = beers.map(elementoActual=>elementoActual.name)
console.log(nameCervezas)

let abvCervezas = beers.map(elementoActual=>elementoActual.abv)
console.log(abvCervezas)

let ibuCervezas = beers.map(elementoActual => elementoActual.ibu)
console.log(ibuCervezas)

const fnTable = (acumulador, nameCervezas, abvCervezas, ibuCervezas) => { acumulador + `
            <tr>
                <td>${nameCervezas}</td>
                <td>${abvCervezas}</td>
                <td>${ibuCervezas}</td>
            </tr>`, "" }

let acumulador 








