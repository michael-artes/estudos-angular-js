var app = angular.module('firstAppAngular', []);

var DivControll = function($scope){

	$scope.nome = 'Michael Douglas';

	$scope.lerNome = function(){
		return $scope.nome;
	}
}

var PaisesControll = function($scope){

	$scope.populacao = 7000;

	$scope.paises = [
		{nome:'Brasil', populacao: 100},
		{nome:'Alemanha', populacao: 700}
	]
}

var TarefasControll = function($scope){

	$scope.todos = [

		{
			tarefa:'Tarefa 01',
			feito:true
		},
		{
			tarefa:'Tarefa 02',
			feito:false
		},
		{
			tarefa:'Tarefa 03',
			feito:false
		},
		{
			tarefa:'Tarefa 04',
			feito:false
		},

	];


	//Adicionar novos elementos a lista
	$scope.addTodo = function(){

		$scope.todos.push({tarefa:$scope.todoText, feito:false});
		$scope.todoText = '';

	}


	//Calcular quantas tarefas estão prontas
	$scope.restante = function(){

		var count = 0;

		angular.forEach($scope.todos, function(todo){
			count += todo.feito ? 0 : 1;
		});

		return count;
	}
}

app.controller('DivControll', DivControll)
   .controller('PaisesControll', PaisesControll)
   .controller('TarefasControll', TarefasControll);