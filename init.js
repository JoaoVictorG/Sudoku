var valores = [
    { quadrante: 1, linha: 1, coluna: 1, valor: 3 },
    { quadrante: 1, linha: 1, coluna: 2, valor: 5 },
    { quadrante: 1, linha: 1, coluna: 3, valor: 0 },
    { quadrante: 1, linha: 2, coluna: 4, valor: 0 },
    { quadrante: 1, linha: 2, coluna: 5, valor: 0 },
    { quadrante: 1, linha: 2, coluna: 6, valor: 0 },
    { quadrante: 1, linha: 3, coluna: 7, valor: 0 },
    { quadrante: 1, linha: 3, coluna: 8, valor: 0 },
    { quadrante: 1, linha: 3, coluna: 9, valor: 0 },


    { quadrante: 2, linha: 1, coluna: 1, valor: 0 },
    { quadrante: 2, linha: 1, coluna: 2, valor: 0 },
    { quadrante: 2, linha: 1, coluna: 3, valor: 0 },
    { quadrante: 2, linha: 2, coluna: 4, valor: 1 },
    { quadrante: 2, linha: 2, coluna: 5, valor: 5 },
    { quadrante: 2, linha: 2, coluna: 6, valor: 4 },
    { quadrante: 2, linha: 3, coluna: 7, valor: 6 },
    { quadrante: 2, linha: 3, coluna: 8, valor: 0 },
    { quadrante: 2, linha: 3, coluna: 9, valor: 3 },


    { quadrante: 3, linha: 1, coluna: 1, valor: 0 },
    { quadrante: 3, linha: 1, coluna: 2, valor: 0 },
    { quadrante: 3, linha: 1, coluna: 3, valor: 8 },
    { quadrante: 3, linha: 2, coluna: 4, valor: 0 },
    { quadrante: 3, linha: 2, coluna: 5, valor: 7 },
    { quadrante: 3, linha: 2, coluna: 6, valor: 0 },
    { quadrante: 3, linha: 3, coluna: 7, valor: 2 },
    { quadrante: 3, linha: 3, coluna: 8, valor: 0 },
    { quadrante: 3, linha: 3, coluna: 9, valor: 0 },


    { quadrante: 4, linha: 4, coluna: 1, valor: 0 },
    { quadrante: 4, linha: 4, coluna: 2, valor: 4 },
    { quadrante: 4, linha: 4, coluna: 3, valor: 1 },
    { quadrante: 4, linha: 5, coluna: 4, valor: 0 },
    { quadrante: 4, linha: 5, coluna: 5, valor: 9 },
    { quadrante: 4, linha: 5, coluna: 6, valor: 0 },
    { quadrante: 4, linha: 6, coluna: 7, valor: 0 },
    { quadrante: 4, linha: 6, coluna: 8, valor: 3 },
    { quadrante: 4, linha: 6, coluna: 9, valor: 5 },

    { quadrante: 5, linha: 4, coluna: 1, valor: 7 },
    { quadrante: 5, linha: 4, coluna: 2, valor: 0 },
    { quadrante: 5, linha: 4, coluna: 3, valor: 8 },
    { quadrante: 5, linha: 5, coluna: 4, valor: 0 },
    { quadrante: 5, linha: 5, coluna: 5, valor: 0 },
    { quadrante: 5, linha: 5, coluna: 6, valor: 0 },
    { quadrante: 5, linha: 6, coluna: 7, valor: 4 },
    { quadrante: 5, linha: 6, coluna: 8, valor: 0 },
    { quadrante: 5, linha: 6, coluna: 9, valor: 9 },


    { quadrante: 6, linha: 4, coluna: 1, valor: 9 },
    { quadrante: 6, linha: 4, coluna: 2, valor: 2 },
    { quadrante: 6, linha: 4, coluna: 3, valor: 0 },
    { quadrante: 6, linha: 5, coluna: 4, valor: 0 },
    { quadrante: 6, linha: 5, coluna: 5, valor: 1 },
    { quadrante: 6, linha: 5, coluna: 6, valor: 0 },
    { quadrante: 6, linha: 6, coluna: 7, valor: 8 },
    { quadrante: 6, linha: 6, coluna: 8, valor: 6 },
    { quadrante: 6, linha: 6, coluna: 9, valor: 0 },



    { quadrante: 7, linha: 7, coluna: 1, valor: 0 },
    { quadrante: 7, linha: 7, coluna: 2, valor: 0 },
    { quadrante: 7, linha: 7, coluna: 3, valor: 9 },
    { quadrante: 7, linha: 8, coluna: 4, valor: 0 },
    { quadrante: 7, linha: 8, coluna: 5, valor: 1 },
    { quadrante: 7, linha: 8, coluna: 6, valor: 0 },
    { quadrante: 7, linha: 9, coluna: 7, valor: 5 },
    { quadrante: 7, linha: 9, coluna: 8, valor: 0 },
    { quadrante: 7, linha: 9, coluna: 9, valor: 0 },


    { quadrante: 8, linha: 7, coluna: 1, valor: 5 },
    { quadrante: 8, linha: 7, coluna: 2, valor: 0 },
    { quadrante: 8, linha: 7, coluna: 3, valor: 1 },
    { quadrante: 8, linha: 8, coluna: 4, valor: 8 },
    { quadrante: 8, linha: 8, coluna: 5, valor: 7 },
    { quadrante: 8, linha: 8, coluna: 6, valor: 6 },
    { quadrante: 8, linha: 9, coluna: 7, valor: 0 },
    { quadrante: 8, linha: 9, coluna: 8, valor: 0 },
    { quadrante: 8, linha: 9, coluna: 9, valor: 0 },


    { quadrante: 9, linha: 7, coluna: 1, valor: 0 },
    { quadrante: 9, linha: 7, coluna: 2, valor: 0 },
    { quadrante: 9, linha: 7, coluna: 3, valor: 0 },
    { quadrante: 9, linha: 8, coluna: 4, valor: 0 },
    { quadrante: 9, linha: 8, coluna: 5, valor: 0 },
    { quadrante: 9, linha: 8, coluna: 6, valor: 0 },
    { quadrante: 9, linha: 9, coluna: 7, valor: 0 },
    { quadrante: 9, linha: 9, coluna: 8, valor: 8 },
    { quadrante: 9, linha: 9, coluna: 9, valor: 1 },
  ];
  count = 0;
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
  exibir(valores);
  console.log("COntagem:" + count);

