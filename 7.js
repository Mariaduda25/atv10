function picoleteria (){
    let picoles = [["chocolate", 1.50]["morango",2.50]["creme",2.50]["manga",3.20]["melancia",3.40]["vanilla ice",3.00]["Ceu azul",3.60]["Brownie",4.00]["Hawaiano",5.00]]
    let i = 0;
    let opcao = "";

    for (i = 0; i < picoles.length; i++){
        console.log(picoles[i][0] + ": " + picoles [i] [1]);
    }

    opcao = prompt("Informe o sabor que deseja: ");

    for (i = 0; i < picoles.length; i++) {
        if(opcao === picoles [1] [0]){
            console.log("O picole de sabor" + picoles [1] [0] + "custa R$")
        }
    }
}