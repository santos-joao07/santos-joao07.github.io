function verificaParquimetro() {
    var inDeposito = document.getElementById('inDeposito')
    var outDeposito = document.getElementById('outDeposito')

    let deposito = Number(inDeposito.value)
    var resposta = ""

    if (isNaN(deposito)) {
        alert("Informe um número válido...")
        inVelocidadePermitida.focus()
        return
    }
    else if (deposito < 1) {
        resposta = "Valor insuficiente"
    } else if (deposito >= 1 && deposito < 1.75) {
        resposta = "Tempo: 30 min" + "\n" + " Troco R$: " + (deposito - 1).toFixed(2)
    } else if (deposito >= 1.75 && deposito < 3) {
        resposta = "Tempo: 60 min"  + "\n" + " Troco R$: " + (deposito - 1.75).toFixed(2)
    }
    else {
        resposta = "Tempo: 120 min" + "\n" + " Troco R$: " + (deposito - 3).toFixed(2)
    }
    outDeposito.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaParquimetro)