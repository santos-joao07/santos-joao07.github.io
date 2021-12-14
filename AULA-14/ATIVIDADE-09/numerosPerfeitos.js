function verificaNumeroPerfeito() {
    var inNumero = document.getElementById('inNumero')
    var outNumero = document.getElementById('outNumero')
    var outResultado = document.getElementById('outResultado')

    var numero = Number(inNumero.value)
    var resposta = "Divisores do " + numero + ": "
    var resultado = ""
    var metade = numero / 2
    var soma = 0
    var aux = 1
    
    

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


    if(soma == numero) {
        resultado = numero + " É um Número Perfeito"
    } else {
        resultado = numero + " Não É um Número Perfeito"
    }

    outNumero.textContent = resposta + " (Soma: " + soma + ")"
    outResultado.textContent = resultado
}


let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaNumeroPerfeito)