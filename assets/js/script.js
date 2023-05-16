/**
 * 1) cuando ingrese un monto en el input de presupuesto
 *  ese monto se debe ver reflejado en el $0 que esta en 
 * la zona de presupuesto:
 *                        debo rescatar el valor del input y actualizar el valor
 *                                                                                  
 * 2) para el segundo form de gasto debo ingresar un nombre y valor 
 * se debe ver reflejado en la zona de gastos y ademas se debe agregar 
 * en la tabla con su respectivo nombre y valor:
 *                                              para rescatar el valor debo hacer lo mismo que hice con presupuesto
 *                                              y debo ir sumando cada gasto 
 *                                              debo guardar todos los gastos en algun lugar quizas en un arreglo
 * 
 * 3)debo calcular la diferencia entre presupuesto y gastos 
 * para obtener un resultado que se vera reflejado en gastos
 * si voy sumando mas gastos el saldo se debe ir actualizando solo
 * 
 * 
 * 4) tengo que eliminar cada gasto si es que quiero el boton debe eliminar solo el gasto que estoy seleccionando,
 * al eliminar un gasto, este debe restarse en la zona de gastos y sumar la diferencia en saldo
 * 
 * 5) idea random: cuando quiera eliminar un objeto de la tabla,
 *  recojo el valor del gasto y se lo resto a 'sumarGastos' para que se vea reflejado en saldo
 */

//VARIABLES
const presupuesto = document.getElementById('input-presupuesto')
const btnPresupuesto = document.getElementById('btn-presupuesto')

const nombreGasto = document.getElementById('input-nombre-gasto')
const gasto = document.getElementById('input-gasto')
const btnGasto = document.getElementById('btn-gasto')

let montoPresupuesto = document.getElementById('monto-presupuesto')  
let montoGasto = document.getElementById('monto-gasto')

let montoSaldo = document.getElementById('saldo')
let tabla = []

let saldo = 0
let sumarPresupuesto = 0
let sumarGastos = 0

//FUNCIONES
// function inyectarMonto(valor,lugar,sumar){
//     sumarPresupuesto = parseInt(valor.value) + sumar
//     sumarGastos = parseInt(valor.value) + sumar
//     if(valor.value == ''){
//         alert('ingrese un valor valido')
//        }else{
//            lugar.innerHTML = `$ ${sumar}`
//        }
// }

function inyectarPresupuesto(){
    if(presupuesto.value == ''){
     alert('ingrese un valor valido')
    }else{
        sumarPresupuesto = parseInt(presupuesto.value) + sumarPresupuesto
        montoPresupuesto.innerHTML = `$ ${sumarPresupuesto}`
    }
}

function inyectarGastos(){
    if(gasto.value !== ''){
        sumarGastos = parseInt(gasto.value) + sumarGastos
        montoGasto.innerHTML = `$ ${sumarGastos}`
    }
}

function inyectarSaldo(){
    saldo = sumarPresupuesto - sumarGastos
    return montoSaldo.innerHTML = `$ ${saldo}`
    
}

function construirObjetoGastos(){
    const objGastoTabla = {
        nombreGastos: nombreGasto.value,
        valor: gasto.value,
        id: Date.now(),
    }
    crearArreglo(objGastoTabla)
}

function crearArreglo(objGastoTabla){
    tabla = [...tabla, objGastoTabla]
    console.log(tabla)
    plastarTabla(tabla)
}

function plastarTabla(arreglo){
    let elementTr = document.getElementById('tbody')

    if(nombreGasto.value !== '' && gasto.value !== ''){
        elementTr.innerHTML = ``
        arreglo.map(e => {
            elementTr.innerHTML += `
                <tr>
                    <td>${e.nombreGastos}</td>
                    <td>${e.valor}</td>
                    <td><a onclick="eliminarGasto(${e.id})" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i></a></td>
                </tr>
            `
        })
    }else{
        alert('Todos los campos son obligatorios')
    }
}

function eliminarGasto(id){
    tabla = tabla.filter(gasto => {
        if(id !== gasto.id){
            return gasto
        }else{
            reajustarValoresGastos(gasto)
        }
    })
        plastarTabla(tabla) 
}

function reajustarValoresGastos(gasto){
    saldo = parseInt(saldo) + parseInt(gasto.valor)
    sumarGastos = sumarGastos - gasto.valor
    montoSaldo.innerHTML =`$ ${saldo}`
    montoGasto.innerHTML = `$ ${sumarGastos}`

    console.log(typeof saldo, typeof sumarGastos)
    
}

//EVENTOS
btnPresupuesto.addEventListener('click', () => {
    inyectarPresupuesto()
    inyectarSaldo()
})

btnGasto.addEventListener('click', () => {
    inyectarGastos()
    // inyectarMonto()
    inyectarSaldo()
    construirObjetoGastos()
} )


