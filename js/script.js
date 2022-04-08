/* 
Simulador de compra y venta de comics. Estarán disponibles 10 comics, cada uno tendrá un precio. 
La persona podrá agregar al carro de compras todos los comics que quiera. Cada vez que agregue,
aparecerá en alert una lista con su carrito hasta el momento. En caso de arrepentirse de agregar,
tiene la opción de eliminar un item.
En caso de pagar en efectivo se le hará un 10% de descuento sobre el monto total.
*/
let misComics = []
let personajes = [
    {name: "spiderman", creator: "Marvel"},
    {name: "batman", creator: "Dc"},
    {name: "daredevil", creator: "Marvel"},
    {name: "flash", creator: "Dc"},
    {name: "iron man", creator: "Marvel"},
]
let costo = 0
let reset;
let comoPaga;
let propina;
let direccion;

function propinaFunc(montoPropina) {
    propina = montoPropina
    while (isNaN(propina) || propina == "") {
        propina = prompt("Ingrese un valor correcto expresado en números")
    }
    return costo += parseInt(propina)
}
function envio(dir) {
    return direccion = dir
}

while (true) {
    let ingreso = prompt("Bienvenidos a Comic Store! Tenemos en stock una lista de 10 comics disponibles. Si desea ver nuestro catálogo ingrese 'si/no'").toLowerCase()
    if (ingreso == "si") {
        while (reset != "no") {
            let compra = parseInt(prompt("Si desea agregar uno de los comics ingrese su número correspondiente\n1) Amazing Spider-Man by Nick Spencer Vol. 15 $1200\n2) The Amazing Spider-Man (2018) #80 $2200\n3) Man Without Fear (2019) #3 $1150\n4) Daredevil (2019) #33 4 $3300\n5) Tony Stark: Iron Man (2018) #15 $1500\n6) Iron Man (2020) #14 6 $5200\n7) Batman: The Killing Joke - The Deluxe Edition 7 $3400\n8) The Dark Knight Returns 30th Anniversary Edition $1700\n9) The Flash: Rebirth $4200\n10) The Flash Vol. 1: Lightning Strikes Twice $1000"))
            if (compra != "1" && compra != "2" && compra != "3" && compra != "4" && compra != "5" && compra != "6" && compra != "7" && compra != "8" && compra != "9" && compra != "10") {
                alert("Debe ingresar un valor correcto")
                continue
            }
            switch (compra) {
                case 1:
                    misComics.push(`Amazing Spider-Man by Nick Spencer Vol. 15\n`)
                    costo += 1200
                    break;
                case 2:
                    misComics.push(`The Amazing Spider-Man (2018) #80\n`)
                    costo += 2200
                    break;
                case 3:
                    misComics.push(`Man Without Fear (2019) #3\n`)
                    costo += 1150
                    break;
                case 4:
                    misComics.push(`Daredevil (2019) #33\n`)
                    costo += 3300
                    break;
                case 5:
                    misComics.push(`Tony Stark: Iron Man (2018) #15\n`)
                    costo += 1500
                    break;
                case 6:
                    misComics.push(`Iron Man (2020) #14\n`)
                    costo += 5200
                    break;
                case 7:
                    misComics.push(`Batman: The Killing Joke - The Deluxe Edition\n`)
                    costo += 3400
                    break;
                case 8:
                    misComics.push(`The Dark Knight Returns 30th Anniversary Edition\n`)
                    costo += 1700
                    break;
                case 9:
                    misComics.push(`The Flash: Rebirth\n`)
                    costo += 4200
                    break;
                case 10:
                    misComics.push(`The Flash Vol. 1: Lightning Strikes Twice\n`)
                    costo += 1000
                    break;
            }
            reset = prompt(`Su carrito incluye:\n${misComics.join("")}\nDesea seguir comprando? (si/no)`)
            while (reset != "si" && reset != "no") {
                reset = prompt(`Desea seguir comprando?\nDebe ingresar si/no`)
            }
        }        
        while (true) {
            comoPaga = prompt(`Su compra final es de:\n${misComics.join("")}\nPrecio final credito $${costo}\nPrecio final en efectivo -10% $${costo - costo * 0.1}\nPrecio final con Billetera Santa Fe -30% $${costo - costo * 0.3}\nCómo desea abonar?`).toLowerCase()
            switch (comoPaga) {
                case "credito":
                    alert(`Su ticket final es de $${costo}`)
                    propinaFunc(prompt("Ingrese propina para el cadete"))
                    envio(prompt("Ingrese su dirección para el envío"))
                    alert(`Información de su pedido:\nProductos:\n${misComics.join("")}\nMonto final más propina: $${costo}\nDirección de envío: ${direccion}\nTiempo estimado de demora: 2 días hábiles\n\n¡¡¡Gracias por su compra!!!`)
                    break
                case "efectivo":
                    alert(`Su ticket final es de $${costo - costo * 0.1}`)
                    propinaFunc(parseInt(prompt("Ingrese propina para el cadete")))
                    envio(prompt("Ingrese su dirección para el envío"))
                    alert(`Información de su pedido:\nProductos:\n${misComics.join("")}\nMonto final más propina: $${costo}\nDirección de envío: ${direccion}\nTiempo estimado de demora: 2 días hábiles\n\n¡¡¡Gracias por su compra!!!`)
                    break
                case "billetera santa fe":
                    alert(`Su ticket final es de $${costo - costo * 0.3}`)
                    propinaFunc(parseInt(prompt("Ingrese propina para el cadete")))
                    envio(prompt("Ingrese su dirección para el envío"))
                    alert(`Información de su pedido:\nProductos:\n${misComics.join("")}\nMonto final más propina: $${costo}\nDirección de envío: ${direccion}\nTiempo estimado de demora: 2 días hábiles\n\n¡¡¡Gracias por su compra!!!`)
                    break
                default:
                    alert("Debe ingresar una opción correcta")
                    continue
            } break
        }
        break
    } else if (ingreso == "no") {
        alert("Gracias por visitarnos. Le dejamos nuestro teléfono de contacto por si se arrepiente. Hasta pronto!")
        break
    } else {
        alert("La respuesta debe ser si/no")
    }
}
console.log(misComics)

const respuesta = prompt("¿Antes de irse, desea buscar en nuestra base de datos algún personaje disponible en stock? (si/no)")

if (respuesta == "si") {
    const personaje = prompt("¿Qué personaje desea buscar?").toLowerCase()
    resp = personajes.find(x => x.name == personaje);    
    if (resp != undefined) {
        alert(`El personaje ${resp.name} de la firma ${resp.creator} sí se encuentra en stock`)
    } else {
        alert(`El personaje no se encuentra en stock`)
    }
}