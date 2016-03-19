
angular.module('angularDI', [])
	   .factory('sobreFilme', function($window){

	   		return {

	   			exibir: function(text){
	   				$window.alert(text);
	   			}
	   		}

	   });



function FilmeControll($scope, sobreFilme) {
	$scope.falaFilme = function() {
		sobreFilme.exibir('Nome do filme é ...1');
	}
}

var injector = angular.injector(['ng', 'angularDI']);
var sobreFilme = injector.get('sobreFilme');

injector.instantiate(FilmeControll);