function exibirRaizQuadrada() {
    var inNumero = document.getElementById('inNumero')
    var outRaiz = document.getElementById('outRaiz')

    let numero = Number(inNumero.value)
    let resultado = Math.sqrt(numero)
    var resposta = ""

    if (numero < 0 || isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus()
        return
    }
    else if (Number.isInteger(resultado)) {
        resposta = resultado
    } else {
        resposta = "Não há raíz exata para " + numero
    }
    outRaiz.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', exibirRaizQuadrada)