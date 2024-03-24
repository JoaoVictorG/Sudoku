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
  count = 0;
  var zerados = 0;
  function exibir(valores){
    valores.forEach(function(item) {
        linha = 0;
        if(linha < 4){
          console.log(item.valor);
          linha++;
        }
        console.log("");     
      count++;
    });   
  }
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
      }
    });
  }
  //exibir(valores);
  //console.log("Valores Antes:");
  //console.log(valores);
  verificarPossibilidade(valores);

  //console.log("Contagem:" + count);
  //console.log("Valores Zerados" + zerados);
  console.log("Valores Depois");
  console.log(valores);

