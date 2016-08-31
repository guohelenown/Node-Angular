var app = angular.module('angular', []);

app.controller("mainController", function($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/books')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});