function numeros() {
    let numeros = [];
    let contador = 0;

    for (contador =0; contador <4; contador ++) {
        numeros.push(parseInt(prompt("Informe o " + parseInt(contador+1) + "o numero")));
    }

    numeros.sort(
        function(a,b){
            return b-a
        }
    )
    console.log("numeros em ordem decrescente:" + numeros [0] + "-" + numeros [1] + "-" + numeros [2] + "-" + numeros [3]);

}