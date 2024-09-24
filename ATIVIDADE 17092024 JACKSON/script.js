function atv1(){
    let n = Number(prompt("Digite um número!")); //entrada manual
    let i = 1;                                 //processo
    while(i <= n){                            //laço de repetiçao
        alert(i);                            //Display
        i ++;                               //processo
    }
}

function atv2(){
    let n = Number(prompt("Digite um número!")); //Entrada manual
    let soma = 0;
    while(n != 0){
        soma = soma + n;
        n = Number(prompt("Digite um número!"));
    }
    alert(soma);
}

function atv3(){
    let qtdTotal = Number(prompt("Digite a quantidade de número!")) ;
    let soma = 0;
    for(let qtdcad = 0; qtdcad < qtdTotal; qtdcad ++){
        let número = Number(prompt("Digite o número"));
        soma = soma + número;
        qtdcad ++;
    }
    let media = soma/qtdTotal;
    alert(media);
   }
   
   function atv4(){
       let n = Number(prompt("Digite o número para calcular o fatorial!"))
       let r = 1;
       for(let i = 1; i <= n; i ++){
       }
       alert(r);
   }

   function atv5(){
    let n = Number(prompt("Digite um número!"));
    let tabela = "";
    //for(inicialização; condição; incremento){trecho que será repetido}
    for(let mult = 1; mult <=10; mult ++){
        tabela += "\n"+n+" x "+mult+" = "+(n*mult);
    }
    alert(tabela);
   }

   function atv6(){
    let n = Number(prompt("Digite um número!"));
    let pares = "";
    for(let par = 1; par <= n; par ++){
        if(par % 2 == 0){
            pares += "\n"+par;
        }
        alert(pares)
    }
   }

   function atv7(){
    let n = Number(prompt("Digite um número!"));
    let passo = Number(prompt("Digite um passo!"));
    let i = 1;
    while(i < n){
        alert(i);
        i+= passo;
    }
   }

   function atv8(){
    let n = Number(prompt("Digite um número!"));
    let impares = "";
    for(let i = 1; i <= n; i ++){
        if(i % 2 !== 0){
            impares += "\n"+i;
        }
        alert(impares);
    }
   }

   function atv9(){
    let n1 = Number(prompt("Digite um número!"));
    let n2 = Number(prompt("Digite o possivel multiplo!"));
    if(n2 % n1 == 0){
        alert(n2+" é multiplo de "+n1);
    }
    else{
        alert(n2+" não é multiplo de "+n1);
    }
   }

   function atv10(){
    let n = Number(prompt("Digite um número!"));
    let qtdDivisores = 0;
    let ant = 1;
    while(ant <= n){
        if(n % ant == 0){
            qtdDivisores ++;
        }
        ant ++;
    }
    if(qtdDivisores == 2){
        alert(n +" é primo!");
    }else{
        alert(n +"não é primo!");
    }
   }
