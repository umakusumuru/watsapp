(function() {
    'use strict';

    angular
        .module('TestAngular')
        .controller('dashboardctrl', controller)

    controller.$inject = ['testfactory', 'dashboardSvc', 'myservice'];

    function controller(testfactory, dashboardSvc, myservice) {
        /* jshint validthis:true */
        var vm = this;
        alert(myservice.getProperty());

    }
})();