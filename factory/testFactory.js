(function() {
    'use strict';

    angular
        .module('TestAngular')
        .factory('testfactory', factory)

    factory.$inject = ['$http'];

    function factory($http) {
        var service = {
            dbdata: dbdata
        };

        return service;

        function dbdata() {
            debugger;
            return 'service';
        }
    }
})();