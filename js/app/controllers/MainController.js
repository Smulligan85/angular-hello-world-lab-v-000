function MainController($scope) {
  $scope.name = "Sean";
  $scope.email = "test@test.com";
  $scope.phone = "999-999-9999";
}

angular
  .module('app')
  .controller('MainController', MainController);
