"use strict";

const angular = require("angular");

angular.module("io").controller("ContactCtrl", function($scope) {
    $scope.contact = {
        "email": "kenziebottoms@gmail.com"
    };
});