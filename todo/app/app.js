require("bulma/css/bulma.css")
require('angular');
var todoMVC = angular.module('todoMVC', []);

todoMVC.controller('mainController', ['$scope', function ($scope) {
    $scope.text = "we are up";
    $scope.notes = [];
    $scope.noteText = '';
    var ctrl = this;

    $scope.addNote = function () {
        var obj = {
            text: $scope.noteText,
            index: $scope.notes.length + 1,
            selected: false
        }
        $scope.notes.push(obj);
        $scope.noteText = '';
    };

    $scope.select = function (note, index) {
        $scope.notes[index].selected = !$scope.notes[index].selected;
        var flag = false;
        $scope.notes.forEach(function (note,i) {
            if (note.selected) {
                flag = true;
            }
        });
        $scope.selectOn = flag;

    };

    $scope.deleteSelected = function () {
        var notes=$scope.notes.filter(function (note,i) {
            return !note.selected;
        });
        $scope.notes=notes;
        $scope.selectOn=false;
        $scope.selectedAll=false;
    };

    $scope.delete = function (note, $index) {
        $scope.notes.splice($index, 1);
    }

    $scope.deleteAll = function () {
        $scope.notes = [];
        $scope.selectedAll = false;
    }

    $scope.selectAll = function () {
        $scope.notes.forEach(function (note, i) {
            $scope.notes[i].selected = true;
        });
        $scope.selectedAll = true;
    }
    $scope.deselectAll = function () {
        $scope.notes.forEach(function (note, i) {
            $scope.notes[i].selected = false;
        });
        $scope.selectedAll = false;
    }
}]);