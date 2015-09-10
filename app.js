angular.module('Test1', ['ui.router']).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

      $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];






      $locationProvider.html5Mode({enabled: true,requireBase: false});

      

    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'MainCtrl',
          resolve:{}
        })

        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'AuthCtrl',
          resolve:{}
        });

    $urlRouterProvider.otherwise('login');  

    }]);




