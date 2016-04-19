angular.module("uiAcordions", []);

angular.module("uiAcordions").run(function($templateCache){
  $templateCache.put("views/accordion.html", "<div>Jogar o template dos htmls aqui. Gerar com o grunt-js</div>");
});


angular.module("uiAcordions").directive("uiAcordions", function(){

  return {

    transclude: true,
    templateUrl: "views/accordions.html",

    controller: function($scope, $element, $attrs){

        var elements = [];

        this.registerAccordions = function(element){
          elements.push(element);
        };

        this.closeAll = function(){

          elements.forEach(function(elementAccordion){

            var divElement = elementAccordion.children().children().next();

            divElement.removeClass("in");
            divElement.prop("aria-expanded", false);

          });

        };
    }

	};
});


angular.module("uiAcordions").directive("uiAcordion", function(){

  return {
    templateUrl: "views/accordion.html",
    scope: {
      title: "@",
      idAcordion: "@id",
      idHrefCollapse: "@href"
    },
    transclude: true,
    require: "^uiAcordions", //pega o elemento de cima
    link: function(scope, element, attrs, ctrl){

      ctrl.registerAccordions(element);

      scope.open = function(){
        ctrl.closeAll();
      };

    }
	};
});
