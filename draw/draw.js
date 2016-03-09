'use strict';
/*jshint devel:true*/
/* global angular*/
// --change the event id for the current meetup
// from Meetup page: Tools/Download attendee liste.g.:
// May 13 http://www.meetup.com/Ottawa-JavaScript/events/218835551/csv/
// Jun 10 http://www.meetup.com/Ottawa-JavaScript/events/218835536/csv/
// Jul  8 http://www.meetup.com/Ottawa-JavaScript/events/218835552/csv/
// Aug 12 http://www.meetup.com/Ottawa-JavaScript/events/218835537/csv/
// 2016
// Mar  9 http://www.meetup.com/Ottawa-JavaScript/events/228085540/csv/
// Apr 13 http://www.meetup.com/Ottawa-JavaScript/events/229276946/csv/
// then convert tp json
//    <!-- http://www.convertcsv.com/csv-to-json.htm -->


angular.module("draw", [])
    .controller("DrawController", function($scope, $http) {
        $scope.helloTo = {};
        $scope.helloTo.title = "World, AngularJS";
        $scope.attendees = [{
            Name: 'Daneroo'
        }];
        $scope.drawDate = '2016-03-09';
        var dataFile = 'attendees-' + $scope.drawDate + '.json';

        $http.get(dataFile).then(function(resp) {
            console.log(resp);
            $scope.attendees = resp.data;
            // console.log($scope.attendees);
        });

        var m = new MersenneTwister();
        $scope.pickWinner = function() {
            $scope.winner = $scope.attendees[Math.floor(m.random() * $scope.attendees.length)];
        };
    });
