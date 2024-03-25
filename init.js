var valores = [
  { quadrante: 1, linha: 1, coluna: 1, valor: 3, possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 1, coluna: 2, valor: 5 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 1, coluna: 3, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 2, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 2, coluna: 5, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 2, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 3, coluna: 7, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 3, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 1, linha: 3, coluna: 9, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 2, linha: 1, coluna: 1, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 1, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 1, coluna: 3, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 2, coluna: 4, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 2, coluna: 5, valor: 5 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 2, coluna: 6, valor: 4 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 3, coluna: 7, valor: 6 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 3, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 2, linha: 3, coluna: 9, valor: 3 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 3, linha: 1, coluna: 1, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 1, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 1, coluna: 3, valor: 8 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 2, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 2, coluna: 5, valor: 7 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 2, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 3, coluna: 7, valor: 2 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 3, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 3, linha: 3, coluna: 9, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 4, linha: 4, coluna: 1, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 4, coluna: 2, valor: 4 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 4, coluna: 3, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 5, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 5, coluna: 5, valor: 9 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 5, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 6, coluna: 7, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 6, coluna: 8, valor: 3 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 4, linha: 6, coluna: 9, valor: 5 ,possiveis: [1,2,3,4,5,6,7,8,9]},

  { quadrante: 5, linha: 4, coluna: 1, valor: 7 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 4, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 4, coluna: 3, valor: 8 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 5, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 5, coluna: 5, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 5, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 6, coluna: 7, valor: 4 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 6, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 5, linha: 6, coluna: 9, valor: 9 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 6, linha: 4, coluna: 1, valor: 9 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 4, coluna: 2, valor: 2 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 4, coluna: 3, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 5, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 5, coluna: 5, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 5, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 6, coluna: 7, valor: 8 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 6, coluna: 8, valor: 6 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 6, linha: 6, coluna: 9, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},



  { quadrante: 7, linha: 7, coluna: 1, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 7, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 7, coluna: 3, valor: 9 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 8, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 8, coluna: 5, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 8, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 9, coluna: 7, valor: 5 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 9, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 7, linha: 9, coluna: 9, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 8, linha: 7, coluna: 1, valor: 5 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 7, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 7, coluna: 3, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 8, coluna: 4, valor: 8 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 8, coluna: 5, valor: 7 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 8, coluna: 6, valor: 6 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 9, coluna: 7, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 9, coluna: 8, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 8, linha: 9, coluna: 9, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},


  { quadrante: 9, linha: 7, coluna: 1, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 7, coluna: 2, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 7, coluna: 3, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 8, coluna: 4, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 8, coluna: 5, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 8, coluna: 6, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 9, coluna: 7, valor: 0 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 9, coluna: 8, valor: 8 ,possiveis: [1,2,3,4,5,6,7,8,9]},
  { quadrante: 9, linha: 9, coluna: 9, valor: 1 ,possiveis: [1,2,3,4,5,6,7,8,9]},
];
  function verificarPossibilidade(valores){
    //QUADRANTE
    valores.forEach(function(item){
      if(item.valor == 0){
        //console.log("ValorZerado")
        //zerados++;
        valores.forEach(function(itemVerificado){
                   
          if(itemVerificado.quadrante == item.quadrante || itemVerificado.linha == item.linha || itemVerificado.coluna == item.coluna){
            if(item.possiveis.indexOf(itemVerificado.valor) !== -1){
              item.possiveis = item.possiveis.filter(function(numero){
                return numero !== itemVerificado.valor;
              });
            }            
          }
        });
      }else{
        item.possiveis = null;
      }
    });
  }
  function substituirPossiveisPorValor(valores) {
    valores.forEach(function(item){
      if(item.possiveis != null){
        if(item.possiveis.length == 1){
          //console.log("ValorZerado")
          //zerados++;
          item.valor = item.possiveis[0];
          item.possiveis = null;
        }
      }      
    });
  }
  function VerificandoSeFinalizou(valores){
    contagem = 0;
    valores.forEach(function(item){
      if(item.valor == 0){
        contagem++;
      }     
    });
    console.log("Contagem: " + contagem);
    if(contagem == 0){
      return true;
    }else{
      return false;
    }    
  }
  var terminou = false
  console.log("Valores Antes");
  valores.forEach(function(item) {
    console.log("Possiveis: " + item.possiveis);
    console.log("Valor: " + item.valor);
});
exibicoes = 1;
  while(terminou == false){
    console.log("Exibicao:" + exibicoes);
    exibicoes++;
    exibirSudoku(valores);
    verificarPossibilidade(valores);
    substituirPossiveisPorValor(valores);  
    terminou = VerificandoSeFinalizou(valores);  
    exibirSudoku(valores);    
  }
  console.log("Valores Depois");
  valores.forEach(function(item) {
    console.log("Possiveis: " + item.possiveis);
    console.log("Valor: " + item.valor);
});

