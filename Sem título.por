programa {
  funcao inicio() {
  inteiro x, tentativa, qtdTentativas
    cadeia mensagem
    escreva("Digite um n�mero\n")
    leia(x)
    limpa()
    escreva("Fa�a sua tentativa!\n")
    leia(tentativa)
    mensagem = "Tentativas esgotadas!"
    para (qtdTentativas = 0; qtdTentativas < 5; qtdTentativas = qtdTentativas +1){
      se(tentativa == x){
        mensagem = "Acertou"
        pare
      }
      senao se(tentativa < x){
        escreva("Digite um n�mero Maior\n")
      }
      senao{
        escreva("Digite um n�mero Menor\n")
      }
      leia(tentativa)
     escreva(mensagem)
  }
}  
  }
}
