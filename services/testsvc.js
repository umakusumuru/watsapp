(function() {
    'use strict';

    angular
        .module('TestAngular')
        .service('testservice', service)

    service.$inject = ['$http'];

    function service($http) {
        this.getData = getData;

        function getData() {
            alert('service');
        }
    }
})();