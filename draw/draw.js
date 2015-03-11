'use strict';
//    <!-- http://www.convertcsv.com/csv-to-json.htm -->


angular.module("draw", [])
    .controller("DrawController", function($scope,$http) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
        $scope.attendees = [{Name:'Daneroo'}];

        $http.get('attendees-2015-03-11.json').then(function(resp) {
            console.log(resp);
            $scope.attendees = resp.data;
            // console.log($scope.attendees);
        });

        $scope.pickWinner = function(){
            $scope.winner = $scope.attendees[Math.floor(Math.random() * $scope.attendees.length)];
        };
    });
