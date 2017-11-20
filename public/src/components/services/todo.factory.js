angular.module('nodeJS').factory('TodoFactory', function ($http, Connection) {

	function _getTodos(){
		return $http.get(Connection.baseUrl + "/todo");
	}

	function _saveTodo(todo){
		return $http.post(Connection.baseUrl + "/todo", todo);
	}
	function _deleteTodo(todo){
		return $http.delete(Connection.baseUrl + "/todo/"+todo._id);
	}

	return{
		getTodos: _getTodos,
		saveTodo: _saveTodo,
		deleteTodo: _deleteTodo
	};
	

});