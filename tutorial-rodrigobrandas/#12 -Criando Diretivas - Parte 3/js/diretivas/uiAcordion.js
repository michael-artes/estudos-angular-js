angular.module("listaTelefonicaApp").directive("uiAcordions", function(){

  return {

    controller: function($scope, $element, $attrs){

        var elements = [];

        this.registerAccordions = function(element){
          elements.push(element);
        };

        this.closeAll = function(){

          elements.forEach(function(elementAccordion){

            elementAccordion.addClass("collapsed");
            elementAccordion.prop("aria-expanded", false);

            var divElement = elementAccordion.children().children().children().next();

            console.log(divElement);
            divElement.removeClass("in");
            divElement.prop("aria-expanded", false);

          });

        };
    }

	};
});


angular.module("listaTelefonicaApp").directive("uiAcordion", function(){

  return {
    templateUrl: "views/accordion-bootstrap.html",
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
