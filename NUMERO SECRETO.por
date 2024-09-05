programa {
  funcao inicio() {
   inteiro x, tentativa
 escreva("Digite o valor do número secreto.\n")
 leia(x)
 limpa()
 escreva("Digite uma tentativa.\n")
 leia(tentativa)
 enquanto(tentativa !=x){
  se(tentativa < x){
escreva("Digite um numero maior!\n")
}
senao{
  escreva("escreva um numero menor!\n")
}
leia(tentativa)    
  }
  escreva("Acertou!")
} 
  }
} 

