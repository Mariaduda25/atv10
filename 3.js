function balanco (){

    let contador = 1;

    let Mensal = 0;
    let anual = 0;
    let despesaM = 0;
    let despesaA = 0;

    let receitaliquida = 0;

    let prejuizo = false;

    while (contador <= 2) {
        Mensal = prompt("informe a receita mensal para o" + contador + "o mes:");
        anual = anual + parseFloat(despesaM);

        contador ++;
    }

    receitaliquida = anual - despesaA;

    if(receitaliquida<0){
        receitaliquida = 0.00;
        prejuizo = true
    }
    console.log("a receita anual é de R$:" + anual + "reais");
    console.log("a despesa anual é de R$: "+ despesaA + "reais");

    if (!prejuizo)[
    
    ]
}