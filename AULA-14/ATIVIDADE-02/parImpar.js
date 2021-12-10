function exibirParImpar() {
    var inNumero = document.getElementById('inNumero')
    var outParImpar = document.getElementById('outParImpar')

    let numero = Number(inNumero.value)
    var resposta = ""

    if (isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus()
        return
    }
    else if (numero % 2 == 0) {
        resposta = "Resposta: " + numero + " é Par"
    } else {
        resposta = "Resposta: " + numero + " é Ímpar"
    }
    outParImpar.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', exibirParImpar)