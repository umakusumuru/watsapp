(function() {
    'use strict';

    angular
        .module('TestAngular')
        .controller('loginctrl', controller);

    controller.$inject = ['$scope', 'testfactory', 'loginsvc'];

    function controller(scope, testfactory, loginsvc) {
        /* jshint validthis:true */
        var vm = this;
        scope.submitlogin = function() {
            alert(11);

            loginsvc.getData().then(function(res) {
                debugger;
                scope.data = res;
            });
        };


        scope.contactArray = ['vilesh', 'Jyothi Bus', 'Raadha', 'G1', 'vijay'];
        scope.contactArray = [
            { name: 'Vilesh', img: 'images/baby1.jpg' },
            { name: 'Jyothi Bus', img: 'images/baby2.jpg' },
            { name: 'Raadha', img: 'images/baby3.jpg' },
            { name: 'G1', img: 'images/baby4.jpg' },
            { name: 'Vijay', img: 'images/baby5.jpg' },
            { name: 'Rakesh', img: 'images/baby1.jpg' },
            { name: 'Jyothi Bus', img: 'images/baby2.jpg' },
            { name: 'Raadha', img: 'images/baby3.jpg' },
            { name: 'Vilesh', img: 'images/baby1.jpg' },
        ];

        scope.test = function() {
            alert(1);
        };


    }
})();