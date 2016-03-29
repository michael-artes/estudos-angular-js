
var app = angular.module('AngularDI', [])
							   .factory('sobreFilme', function($window){

							   		return {

							   			exibir: function(text){
							   				$window.alert(text);
							   			}
							   		}

							   });


var filmeControler = function($scope, sobreFilme){

	$scope.falaFilme = function(){
		sobreFilme.exibir('O nome do filme é...');
	};

};

app.controller('FilmeControll', filmeControler);

var injetor = angular.injector(['AngularDI','ng']);
injetor.instantiate(FilmeControll);
