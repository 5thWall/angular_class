angular.module('myApp', ['firebase'])
.controller('HomeCtrl',
  function($scope, angularFire) {

    var ref = new Firebase("https://fifthwall.firebaseio.com/tasks");
    angularFire(ref, $scope, 'tasks');
    $scope.tasks = [];

    $scope.addTask = function() {
      $scope.tasks.push({ body : $scope.task.body });
      $scope.task = {};
    };

    $scope.markAsDone = function(task) {
      var index = $scope.tasks.indexOf(task);
      if (index >=0 ) {
        $scope.tasks.splice(index, 1);
      }
    };
});
