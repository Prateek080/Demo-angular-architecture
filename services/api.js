angular.module('Test1').factory('API', ['$http', function($http) {

      return {

        
        getFeed: function() {
          return $http.get('horizon/server/index.php');
        },

        checklogin: function(user){
          return $http.post('http://192.168.68.189:8089/api/v1.0/login', user, { headers: { 'Content-Type': 'application/json' , 'deviceId': 'asdfgh'} });
        }
      }

    }]);