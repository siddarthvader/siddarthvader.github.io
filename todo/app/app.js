require("bulma/css/bulma.css")
require('angular');
var todoMVC = angular.module('todoMVC', []);

todoMVC.controller('mainController', ['$scope', function ($scope) {
    $scope.text = "we are up";
    $scope.notes = [];
    $scope.noteText = '';
    var ctrl = this;

    $scope.addNote = function (data) {
        $scope.notes.push($scope.noteText);
        $scope.noteText = '';
    };

    $scope.isSelected = function (index) {
        console.log($scope.selected);
        if ($scope.selected) {
            return $scope.selected.indexOf(index) > -1 ? true : false;
        }
        else {
            return false;
        }
    }

    $scope.select = function (note) {
        if (!$scope.selected) {
            $scope.selected = [];
            $scope.selected.push(note);
        }
        else {
            var index=$scope.selected.indexOf(note);
            if ( index== -1) {
                $scope.selected.push(note);
            }
            else {
                $scope.selected.splice(index,1);
            }

        }

    }

    $scope.delete = function ($index) {
        $scope.notes.splice($index, 1);
    }

    $scope.deleteAll = function () {
        $scope.notes = [];
    }

    $scope.selectAll = function () {
        $scope.selected = $scope.notes;
    }
    $scope.deselectAll=function(){
        $scope.selected=[];
    }
}]);