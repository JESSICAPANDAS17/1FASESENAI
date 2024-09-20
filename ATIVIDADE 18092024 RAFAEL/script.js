function Executar1008(){
    let id, horas, valorHora, salario
    //let horas
    //let valorHora
    //let salario
    id = Number(prompt("Digite seu id:"))
    //id = Number('45')
    //id = 45
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number(prompt("Quantos você ganha por hora?"))

    salario = horas * valorHora

    alert("ID: " + "\nSalário: R$" + salario.toFixed(2))
}

function Executar1009(){
    let salarioFixo, comissão, vendedor, totaldeVendas, salariocombonus
    vendedor = (prompt("Digite o nome do vendedor"))
    salarioFixo = Number(prompt("Digite o salario Fixo"))
    totaldeVendas = Number(prompt("Digite o total de vendas"))
    comissão = totaldeVendas * 0.15
    salariocombonus = salarioFixo + comissão
    
    alert("vendedor" + vendedor+ "\n salario com bonus R$" + salariocombonus.toFixed(2))

}

function Executar1016(){
    let distancia = Number (prompt("Qual a distancia desejada?"))
    let distanciaX = 0;
    let distaciaY = 0;
    tempo = 0

    while(distanciaY-distanciaX < distancia){
        distanciaX +=1
        distanciaY +=1.5
        tempo++
        console.log()
    }
}

function executar1038(){
     // ler o codigo
     let codigo = Number(prompt("Digite o código:"))
     
     // ler a quantidade
     let quantidade = Number(prompt("Quantidade:"))

     // definir o preço do produtp
     let preço
     if(codigo == 1){
         preço = 4
     }else if(codigo == 2){
        preço = 4.5
     }else if(codigo == 3){
        preço = 5
    }else if(codigo == 4){
        preço = 2
    }
     // calcular o valor da conta  (preço * quantidade)
}