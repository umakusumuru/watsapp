(function() {
    'use strict';

    angular
        .module('TestAngular')
        .service('dashboardSvc', service)

    service.$inject = ['$http'];

    function service($http) {
        this.getData = getData;
        this.getmails = getmails;

        var obj = 'testtservice';

        function getData() {
            debugger;
            return 'service';
        }

        function getmails() {
            return 'service mails';
        }
    }
})();