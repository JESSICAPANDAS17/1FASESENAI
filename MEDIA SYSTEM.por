programa {
  funcao inicio() {
    inteiro qtdtotal, qtdcad
    real map, media, totalpeso, atv, peso
    cadeia mensagem
    escreva("Digite a quantidade de atividade que deseja calcular.\n")
    leia(qtdtotal)
    escreva("Digite a media nescessária para aprovação,\n")
    leia(map)
    media = 0
    totalpeso = 0
    qtdcad = 0
    enquanto(qtdcad < qtdtotal){
      escreva("Digite a nota de atividade.\n")
      leia(atv)
      escreva("Digite o peso da atividade.\n")
      leia(peso)
      totalpeso = totalpeso + peso
      media = media +(atv*peso)
      qtdcad = qtdcad + 1
    }
    media = media / totalpeso
    se(media >= map){
      mensagem = ""+media +": portanto está aprovado"
    }
    senao se(media >= map - 0.5){
      mensagem = "+media +: portanto está aprovado por conselho"
    }
    senao{
      mensagem = ""media + ": portanto está reprovado" 
    }
    escreva(mensagem)
  }
}
