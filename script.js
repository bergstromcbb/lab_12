

var app = angular.module('todoModule', []);

app.controller('todoController', function($scope){
  $scope.chores = ['mow the lawn', 'wash the laundry', 'take out the garbage'];

  $scope.onclick = function(choreToAdd){
  	$scope.chores.push(choreToAdd);	
  	$scope.choreToAdd = "";
  };

  $scope.removeChore = function(chore){
  	var index = $scope.chores.indexOf(chore);	
  	$scope.chores.splice(index, 1);

  };

});

// $("#addButton").on("click", function(){
//    var $newChore = $("#userChore").val();

//    $scope.chores.push($newChore);

//    $("#choreList").append(chores);
