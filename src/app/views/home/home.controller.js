angular.module('findoo').controller('HomeController',function ($scope,$state,$rootScope, SearchFactory, $location, toastr, baseURL, $http){
    
    $scope.keyword = '';
    $scope.path = 'search.profiles.list';

    $scope.doSearch = function() {
        if(!$scope.keyword) return;

        $state.go($scope.path, {q: $scope.keyword});
    }

    $scope.selectedItemChange = function selectedItemChange(item) {
        if(item) {
            $scope.keyword = item;
            $state.go($scope.path, {q: $scope.keyword});
        }
    }

    $scope.querySearch = function(query) {
        if(query) {
            return $http.get(baseURL + "search/keyword", {
                params: {keyword: query}
            }).then(function (response) {
                    var list = response.data.user.map(function(user) {
                        return user.firstname + " " + user.lastname;
                    });
                    return list;
                });
        } else
            return [];
    }

});