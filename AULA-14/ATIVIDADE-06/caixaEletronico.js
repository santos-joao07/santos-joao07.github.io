function verificaNotasSaque() {
    var inSaque = document.getElementById('inSaque')
    var outSaque = document.getElementById('outSaque')

    var saque = Number(inSaque.value)
    var resposta = ""
    const notas = [100, 50, 10]

    if (isNaN(saque)) {
        alert("Informe um número válido...")
        inLadoA.focus()
        return
    }

    for (let nota of notas) {
        let numNotas = parseInt(saque / nota)
        resposta = resposta + `notas de R$ ${nota}: ${numNotas} \n \n`
        saque %= nota;
    }

    if (saque != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        inSaque.focus()
        return
    }


    outSaque.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaNotasSaque)