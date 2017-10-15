angular.module('GeneralApp')
.controller('ProfileCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter) {
        DocTitle.mainTitle = 'Profile';
        DocTitle.Set('page');

        $scope.siginOut = function () {
            $rootScope.isLoginAuth = false;
            $location.url('/');
        };
    }
]);