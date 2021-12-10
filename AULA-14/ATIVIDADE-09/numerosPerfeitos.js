function verificaNumeroPerfeito() {
    var inNumero = document.getElementById('inNumero')
    var outNumero = document.getElementById('outNumero')
    var outSoma = document.getElementById('outSoma')

    var numero = Number(inNumero.value)
    var resposta = "Divisores do " + numero + ": "
    let metade = numero / 2
    let aux = 1
    

    if (isNaN(numero)) {
        alert("Informe um número válido...")
        inLadoA.focus()
        return
    }
    while(aux <= metade) {
        if(numero % aux == 0) {
            soma = soma + aux
            resposta =  resposta + aux + ","
        }
        aux++
    }

    outNumero.textContent = resposta
    outSoma.textContent = soma
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaNumeroPerfeito)