'use strict';
// --change the event id for the current meetup
// from Meetup page: Tools/Download attendee liste.g.:
// May 13 http://www.meetup.com/Ottawa-JavaScript/events/218835551/csv/
// Jun 10 http://www.meetup.com/Ottawa-JavaScript/events/218835536/csv/
// then convert tp json
//    <!-- http://www.convertcsv.com/csv-to-json.htm -->


angular.module("draw", [])
    .controller("DrawController", function($scope,$http) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
        $scope.attendees = [{Name:'Daneroo'}];

        $http.get('attendees-2015-05-13.json').then(function(resp) {
            console.log(resp);
            $scope.attendees = resp.data;
            // console.log($scope.attendees);
        });

        $scope.pickWinner = function(){
            $scope.winner = $scope.attendees[Math.floor(Math.random() * $scope.attendees.length)];
        };
    });
