function somarNumeros() {
    let total = 0;
    let continuar = true;

   
    while (continuar) {
        
        let numero = parseFloat(prompt("Digite um número:"));

        
        if (!isNaN(numero)) {
            
            total += numero;
        } else {
            
            alert("Por favor, digite um número válido.");
            continue;
        }

        
        let resposta = prompt("Deseja inserir outro número? (sim/não)");

        
        if (resposta.toLowerCase() !== "sim") {
            continuar = false;
        }
    }

   
    alert("O resultado da soma é: " + total);
}

