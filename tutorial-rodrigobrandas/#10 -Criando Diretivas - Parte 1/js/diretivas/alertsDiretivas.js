angular.module("listaTelefonicaApp").directive("uiAlert", function(){

    return {
      templateUrl: "views/uiAlert.html",
      restrict: "E",
      scope: {
        title: "@title",
        message: "=message"
      }
    };
});
