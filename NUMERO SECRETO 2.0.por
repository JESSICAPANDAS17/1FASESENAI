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
    qtdTentativas = 0
    enquanto (qtdTentativas < 5){
      se(tentativa == x){
        mensagem = "Acertou"
        pare
      }
      senao se(tentativa < x){
        escreva("Digite um n�mero Maior\n")
      }
      senao{
        escreva("Digite umn�mero Menor\n")
      }
      leia(tentativa)
      qtdTentativas = qtdTentativas +1
    }
    escreva(mensagem)
  }
}
  }
}
