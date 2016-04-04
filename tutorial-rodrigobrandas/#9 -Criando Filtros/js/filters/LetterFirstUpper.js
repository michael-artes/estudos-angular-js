//O filtro converte a primeira letra de cada nome e maiúsculo

angular.module("listaTelefonicaApp").filter("letterFirstUpper", function(){

    return function(input){

        var listNomes = input.split(" ");

        var listaNomesFormatado = listNomes.map(function(nome){

              if (/(da|de)/gi.test(nome)) { // /gi ignorecase
                  return nome.toLowerCase();
              }

              return nome.charAt(0) + nome.substring(1).toLowerCase();
        });

        return listaNomesFormatado.join(" ");
    };
});
