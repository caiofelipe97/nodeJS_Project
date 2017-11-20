angular.module('nodeJS').controller('AppController',
    function ( $scope, TodoFactory) {
    	$scope.todo ={};
    	function loadTodos() {
             TodoFactory.getTodos()
                    .then(function (result) {
                        $scope.todos = result.data;
                    }).catch(function () {
                        console.log("Deu ruim");
                });
           };
        
        loadTodos();

    	$scope.todos = [];



    $scope.addTodo = function(){
    	TodoFactory.saveTodo($scope.todo)
                    .then(function (result) {
                    	console.log($scope.todo);
                    	$scope.todos.push($scope.todo);
                    	$scope.todo ={};

                        console.log($scope.todos);
                    }).catch(function () {
                        console.log("Deu ruim");
                });
	}

	$scope.removeTodo = function(todo){
		console.log(todo);
		TodoFactory.deleteTodo(todo)
                    .then(function (result) {
                    	loadTodos();
                    	$scope.todo ={};

                        console.log($scope.todos);
                    }).catch(function () {
                        console.log("Deu ruim");
                });	

	};

});

	