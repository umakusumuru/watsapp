(function() {
    'use strict';

    angular
        .module('TestAngular')
        .factory('loginsvc', factory);

    factory.$inject = ['$http'];

    function factory(http) {
        return {
            getData: function() {
                return http.get('http://localhost:49494/api/values/Getlist', { params: { id: 10 } });
            }
        };
    }
})();