var app = angular.module('firstAppAngular', []);

app.controller('divControll', function($scope){

	$scope.nome = 'Michael Douglas';

	var OlaControll = function($scope){

		$scope.lerNome = function(){
			return $scope.nome;
		}

	}

});