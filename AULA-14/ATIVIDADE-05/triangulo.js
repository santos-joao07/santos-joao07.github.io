function verificaLadosTriangulo() {
    var inLadoA = document.getElementById('inLadoA')
    var inLadoB = document.getElementById('inLadoB')
    var inLadoC = document.getElementById('inLadoC')
    var outTriangulo = document.getElementById('outTriangulo')

    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)
    var resposta = ""

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) ) {
        alert("Informe um número válido...")
        inLadoA.focus()
        return
    }
    else if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB) ) {
        resposta = "Não Pode Ser Formado Triângulo"
    } else if (ladoA == ladoB && ladoB == ladoC) {
        resposta = "Lados Podem Formar Um Triângulo" + "\n" + "\n" + "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resposta = "Lados Podem Formar Um Triângulo" + "\n" + "\n" + "Tipo: Isósceles"
    }
    else {
        resposta = "Lados Podem Formar Um Triângulo" + "\n" + "\n" + "Tipo: Escaleno"
    }
    outTriangulo.textContent = resposta
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaLadosTriangulo)