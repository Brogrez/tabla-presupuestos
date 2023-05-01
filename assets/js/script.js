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

const montoPresupuesto = document.getElementById('monto-presupuesto')  
const montoGasto = document.getElementById('monto-gasto')

const montoSaldo = document.getElementById('saldo')

let saldo = 0
let sumarPresupuesto = 0
let sumarGastos = 0

//FUNCIONES
function inyectarPresupuesto(){
    sumarPresupuesto = parseInt(presupuesto.value) + sumarPresupuesto
    if(presupuesto.value == ''){
     alert('ingrese un valor valido')
    }else{
        montoPresupuesto.innerHTML = `$ ${sumarPresupuesto}`
    }
}

function inyectarGastos(){
    sumarGastos = parseInt(gasto.value) + sumarGastos
    if(gasto.value == ''){
        alert('ingrese un valor valido')
       }else{
        montoGasto.innerHTML = `$ ${sumarGastos}`
       }
}

function inyectarSaldo(){
    saldo = sumarPresupuesto - sumarGastos
    return montoSaldo.innerHTML = `$ ${saldo}`
}

//EVENTOS
btnPresupuesto.addEventListener('click', () => {
    inyectarPresupuesto()
    inyectarSaldo()
})

btnGasto.addEventListener('click', () => {
    inyectarGastos()
    inyectarSaldo()
    
} )


