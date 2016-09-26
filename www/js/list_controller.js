angular.module("list.controller",[])

.controller("listController", function($scope, $ionicModal, $timeout, $http){

	$scope.items = [];
	$scope.item = "";
	$scope.data = {
  	showDelete: false
  };

  $ionicModal.fromTemplateUrl('templates/add_item.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openItemForm = function() {
    $scope.modal.show();
  };

  $scope.closeItemForm = function() {
    $scope.modal.hide();
  };

  $scope.submitItemForm = function() {
    console.log('Adding Item', this.item);
    var input = this.item
    if(input.length > 0){
    	$scope.addItem(input);
  	}
    $timeout(function() {
      $scope.closeItemForm();
    }, 100);
    this.item = ""
  };

  $scope.addItem = function (item) {
  	if ($scope.items.indexOf(item) == -1) {
    	$scope.items.push(item);
		}
	};

	$scope.removeItem = function (index) {
  	$scope.items.splice(index, 1);
	};


})
