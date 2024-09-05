programa {
  funcao inicio() {
    inteiro x, tentativa, qtdTentativas
    cadeia mensagem
    escreva("Digite um número\n")
    leia(x)
    limpa()
    escreva("Faça sua tentativa!\n")
    leia(tentativa)
    mensagem = "Tentativas esgotadas!"
    qtdTentativas = 0
    enquanto (qtdTentativas < 5){
      se(tentativa == x){
        mensagem = "Acertou"
        pare
      }
      senao se(tentativa < x){
        escreva("Digite um número Maior\n")
      }
      senao{
        escreva("Digite umnúmero Menor\n")
      }
      leia(tentativa)
      qtdTentativas = qtdTentativas +1
    }
    escreva(mensagem)
  }
}
  }
}
