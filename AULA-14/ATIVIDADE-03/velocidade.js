function verificaVelocidade() {
    var inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
    var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
    var outVelocidade = document.getElementById('outVelocidade')

    let velocidadePermitida = Number(inVelocidadePermitida.value)
    let velocidadeCondutor = Number(inVelocidadeCondutor.value)
    var resposta = ""

    if (isNaN(velocidadePermitida) || isNaN(velocidadeCondutor)) {
        alert("Informe um número válido...")
        inVelocidadePermitida.focus()
        return
    }
    else if (velocidadeCondutor <= velocidadePermitida) {
        resposta = "Sem Multa"
    } else if (velocidadeCondutor > velocidadePermitida &&
        velocidadeCondutor <= (velocidadePermitida + (velocidadePermitida * 0.2))) {
        resposta = "Situação: Multa Leve"
    } else {
        resposta = "Situação: Multa Grave"
    }
    outVelocidade.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaVelocidade)